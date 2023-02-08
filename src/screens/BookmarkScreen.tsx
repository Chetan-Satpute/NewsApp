import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootParamList} from '../../App';
import NewsList from '../components/NewsList';
import {Store} from '../redux/store';

type Props = NativeStackScreenProps<RootParamList, 'Bookmarks'>;

const BookmarkScreen = (props: Props) => {
  const bookmarks = useSelector<Store, string[]>(state =>
    Object.values(state.news.bookmarks).map(article => article.url),
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

      <NewsList articleUrls={bookmarks} loading={false} />
    </View>
  );
};

export default BookmarkScreen;
