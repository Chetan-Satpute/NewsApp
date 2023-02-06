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
import {useSelector} from 'react-redux';

import {RootParamList} from '../../App';
import {NewsArticle} from '../redux/news/newsSlice';
import {Store} from '../redux/store';

type Props = NativeStackScreenProps<RootParamList, 'Article'>;

const ArticleScreen = (props: Props) => {
  const article = useSelector<Store, NewsArticle | undefined>(state =>
    state.news.articles.find(item => item.url === props.route.params.url),
  );

  return (
    <View className="flex-1">
      <View className="p-3 bg-blue-200 bg-neutral-800 flex-row justify-between">
        <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableWithoutFeedback>
        <Icon name="bookmark" size={20} color="#fff" />
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
