import React from 'react';
import {FlatList} from 'react-native';

import NewsCard from './NewsCard';
import {NewsArticle} from '../redux/news/newsSlice';

interface Props {
  articles: NewsArticle[];
}

const NewsList = (props: Props) => {
  return (
    <FlatList
      className="flex-1 bg-neutral-800"
      data={props.articles}
      renderItem={({item}) => <NewsCard url={item.url} />}
      keyExtractor={item => item.url}
    />
  );
};

export default NewsList;
