import {View, Text, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, {useEffect, useRef, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootParamList} from '../../App';
import NewsList from '../components/NewsList';
import {getNewsByQuery} from '../api/news/getNews';
import {loadArticles} from '../redux/news/newsSlice';
import {useDispatch} from 'react-redux';

type Props = NativeStackScreenProps<RootParamList, 'Search'>;

const SearchScreen = (props: Props) => {
  const [searchResultUrls, setSearchResultUrls] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const timeoutID = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutID.current) {
      clearTimeout(timeoutID.current);
    }

    if (query === '') {
      setSearchResultUrls([]);
    } else {
      timeoutID.current = setTimeout(async () => {
        setLoading(true);

        const articles = await getNewsByQuery(query);
        const articleUrls = articles.map(article => article.url);

        dispatch(loadArticles(articles));
        setSearchResultUrls(articleUrls);

        setLoading(false);
      }, 500);
    }

    return () => {
      clearTimeout(timeoutID.current);
    };
  }, [query, dispatch]);

  return (
    <View className="flex-1 bg-neutral-800">
      <View className="p-3 bg-blue-200 bg-neutral-800 flex-row justify-between">
        <Icon.Button
          name="arrow-back"
          size={25}
          color="#fff"
          backgroundColor="transparent"
          onPress={() => props.navigation.goBack()}
        />

        <Text className="text-lg font-bold text-neutral-200">Search</Text>
      </View>

      <View className="flex-row justify-center pb-3">
        <TextInput
          className="p-3 text-neutral-200 w-full bg-neutral-700 rounded-md max-w-sm"
          value={query}
          onChangeText={setQuery}
          placeholder="Search for Article"
          placeholderTextColor="#a3a3a3"
        />
      </View>

      <NewsList articleUrls={searchResultUrls} loading={loading} />
    </View>
  );
};

export default SearchScreen;
