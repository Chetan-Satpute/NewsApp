import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Store} from '../redux/store';
import {RootParamList} from '../../App';
import NewsList from '../components/NewsList';
import NewsCategory from '../components/NewsCategory';
import {Category, loadArticles} from '../redux/news/newsSlice';
import {getNewsByCategory} from '../api/news/getNews';

type Props = NativeStackScreenProps<RootParamList, 'Home'>;

const HomeScreen = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [articleUrls, setArticleUrls] = useState<string[]>([]);
  const dispatch = useDispatch<ThunkDispatch<Store, any, AnyAction>>();
  const category = useSelector<Store, Category>(state => state.news.category);

  useEffect(() => {
    setLoading(true);

    getNewsByCategory(category).then(articles => {
      console.log('HERE');
      dispatch(loadArticles(articles));

      setArticleUrls(articles.map(article => article.url));

      setLoading(false);
    });
  }, [dispatch, category]);

  console.log(articleUrls);

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
            onPress={() => props.navigation.navigate('Search')}
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

      <NewsList articleUrls={articleUrls} loading={loading} />
    </View>
  );
};

export default HomeScreen;
