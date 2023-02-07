import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootParamList} from '../../App';
import NewsList from '../components/NewsList';
import {NewsArticle} from '../redux/news/newsSlice';
import {Store} from '../redux/store';

type Props = NativeStackScreenProps<RootParamList, 'Bookmarks'>;

const BookmarkScreen = (props: Props) => {
  const bookmarks = useSelector<Store, NewsArticle[]>(state =>
    Object.values(state.news.bookmarks),
  );

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

        <Text className="text-lg font-bold text-neutral-200">Bookmarks</Text>
      </View>

      <NewsList articles={bookmarks} />
    </View>
  );
};

export default BookmarkScreen;
