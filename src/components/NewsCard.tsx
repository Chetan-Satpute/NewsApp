import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

import {formatDate} from '../utils/dateUtils';

interface NewsItem {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

const NewsCard = (props: NewsItem) => {
  const date = new Date(props.publishedAt);

  return (
    <View className="flex-row p-1 border-b border-neutral-500">
      {props.urlToImage && (
        <View className="basis-1/4">
          <Image source={{uri: props.urlToImage}} style={styles.image} />
        </View>
      )}
      <View className="flex-1 pl-3">
        <Text className="text-md mb-5 text-neutral-200">{props.title}</Text>
        <View className="flex-row justify-between">
          <Text className="text-xs text-neutral-500">{props.source.name}</Text>
          <Text className="text-xs text-neutral-500">{formatDate(date)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
});

export default NewsCard;
