import React from 'react';
import {Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import NewsList from '../components/NewsList';

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <View className="flex-row justify-between items-center p-3 bg-blue-200 bg-neutral-800">
        <Text className="text-xl font-bold text-neutral-200">NewsApp</Text>
        <Icon name="search" size={20} color="#fff" />
      </View>

      <ScrollView
        className="bg-neutral-700 flex-row grow-0"
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Text className="px-3 p-3 text-neutral-400">general</Text>
        <Text className="px-3 p-3 text-neutral-200 border-b-2 border-blue-500">
          business
        </Text>
        <Text className="px-3 p-3 text-neutral-400">entertainment</Text>
        <Text className="px-3 p-3 text-neutral-400">health</Text>
        <Text className="px-3 p-3 text-neutral-400">science</Text>
        <Text className="px-3 p-3 text-neutral-400">sports</Text>
        <Text className="px-3 p-3 text-neutral-400">technology</Text>
      </ScrollView>

      <NewsList />
    </View>
  );
};

export default HomeScreen;
