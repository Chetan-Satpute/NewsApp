import React, {useEffect} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsCategory from '../components/NewsCategory';
import {useDispatch, useSelector} from 'react-redux';
import {fetchArticles, NewsArticle} from '../redux/news/newsSlice';

import NewsList from '../components/NewsList';
import {Store} from '../redux/store';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import LoadingSpinner from '../components/LoadingSpinner';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootParamList} from '../../App';

type Props = NativeStackScreenProps<RootParamList, 'Home'>;

const HomeScreen = (props: Props) => {
  const loading = useSelector<Store, boolean>(state => state.news.loading);
  const articles = useSelector<Store, NewsArticle[]>(
    state => state.news.articles,
  );
  const dispatch = useDispatch<ThunkDispatch<Store, any, AnyAction>>();

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  return (
    <View className="flex-1 bg-neutral-900">
      <View className="flex-row justify-between items-center p-3 bg-blue-200 bg-neutral-800">
        <Text className="text-xl font-bold text-neutral-200">NewsApp</Text>
        <View className="flex-row">
          <Icon.Button
            name="search"
            size={20}
            color="#fff"
            backgroundColor="transparent"
            onPress={() => {}}
          />

          <Icon.Button
            name="bookmarks"
            size={20}
            color="#fff"
            backgroundColor="transparent"
            onPress={() => props.navigation.navigate('Bookmarks')}
          />
        </View>
      </View>

      <NewsCategory />

      {loading ? <LoadingSpinner /> : <NewsList articles={articles} />}
    </View>
  );
};

export default HomeScreen;
