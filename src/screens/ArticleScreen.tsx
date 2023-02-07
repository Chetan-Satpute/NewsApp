import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';

import {RootParamList} from '../../App';
import {NewsArticle, setBookmark, unsetBookmark} from '../redux/news/newsSlice';
import {Store} from '../redux/store';

type Props = NativeStackScreenProps<RootParamList, 'Article'>;

const ArticleScreen = (props: Props) => {
  const article = useSelector<Store, NewsArticle | undefined>(state =>
    state.news.articles.find(item => item.url === props.route.params.url),
  );

  const bookmarked = useSelector<Store, boolean>(
    state =>
      article !== undefined && state.news.bookmarks[article?.url] !== undefined,
  );

  const dispatch = useDispatch();

  const toggleBookmark = () => {
    if (article) {
      if (bookmarked) {
        dispatch(unsetBookmark(article.url));
      } else {
        dispatch(setBookmark(article));
      }
    }
  };

  return (
    <View className="flex-1">
      <View className="p-3 bg-blue-200 bg-neutral-800 flex-row justify-between">
        <Icon.Button
          name="arrow-back"
          size={25}
          color="#fff"
          backgroundColor="transparent"
          onPress={() => props.navigation.goBack()}
        />
        {bookmarked ? (
          <Icon.Button
            name="bookmark"
            size={20}
            color="#fff"
            backgroundColor="transparent"
            onPress={toggleBookmark}
          />
        ) : (
          <Icon.Button
            name="bookmark-outline"
            size={20}
            color="#fff"
            backgroundColor="transparent"
            onPress={toggleBookmark}
          />
        )}
      </View>

      {article && (
        <ScrollView className="flex-1 bg-neutral-800">
          <Text className="text-neutral-200 font-semibold text-lg p-2">
            {article.title}
          </Text>

          <View className="flex-1 shrink-1 h-60">
            <Image source={{uri: article.urlToImage}} style={styles.image} />
          </View>

          <View className="flex-1 p-3 space-y-5">
            <Text className="text-neutral-400 italic mb-3">
              {article.description}
            </Text>

            <Text className="text-neutral-200">{article.content}</Text>
          </View>

          <View className="py-3 px-10">
            <Button onPress={() => {}} title="Visit Article" />
          </View>
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default ArticleScreen;
