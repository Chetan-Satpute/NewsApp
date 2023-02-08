import React from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';

import NewsCard from './NewsCard';

interface Props {
  articleUrls: string[];
  loading: boolean;
}

const NewsList = (props: Props) => {
  if (props.loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#3b82f6" />
      </View>
    );
  }

  return (
    <FlatList
      className="flex-1 bg-neutral-800"
      data={props.articleUrls}
      renderItem={({item}) => <NewsCard url={item} />}
      keyExtractor={item => item}
    />
  );
};

export default NewsList;
