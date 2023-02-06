import {NavigationProp, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {useSelector} from 'react-redux';
import {RootParamList} from '../../App';
import {NewsArticle} from '../redux/news/newsSlice';
import {Store} from '../redux/store';

import {formatDate} from '../utils/dateUtils';

interface Props {
  url: string;
}

const NewsCard = (props: Props) => {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const article = useSelector<Store, NewsArticle | undefined>(state =>
    state.news.articles.find(item => item.url === props.url),
  );

  if (article === undefined) {
    return null;
  }

  const date = new Date(article.publishedAt);

  return (
    <TouchableWithoutFeedback
      onPress={() => navigation.navigate('Article', {url: props.url})}>
      <View className="flex-row p-1 border-b border-neutral-500">
        {article.urlToImage && (
          <View className="basis-1/4">
            <Image source={{uri: article.urlToImage}} style={styles.image} />
          </View>
        )}
        <View className="flex-1 pl-3">
          <Text className="text-md mb-5 text-neutral-200">{article.title}</Text>
          <View className="flex-row justify-between">
            <Text className="text-xs text-neutral-500">
              {article.source.name}
            </Text>
            <Text className="text-xs text-neutral-500">{formatDate(date)}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default NewsCard;
