import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import React, {useEffect} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchArticles, NewsArticle} from '../redux/news/newsSlice';
import {Store} from '../redux/store';

import NewsCard from './NewsCard';

const NewsList = () => {
  const articles = useSelector<Store, NewsArticle[]>(state => {
    return state.news.articles;
  });

  const dispatch = useDispatch<ThunkDispatch<Store, any, AnyAction>>();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <FlatList
      className="flex-1 bg-neutral-800"
      data={articles}
      renderItem={({item}) => <NewsCard url={item.url} />}
      keyExtractor={item => item.url}
    />
  );
};

export default NewsList;
