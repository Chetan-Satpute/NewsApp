import {AnyAction, ThunkDispatch} from '@reduxjs/toolkit';
import React from 'react';
import {ScrollView, Text, TouchableWithoutFeedback} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Category, setCategory} from '../redux/news/newsSlice';
import {Store} from '../redux/store';

const NewsCategory = () => {
  const activeCategory = useSelector<Store, Category>(
    state => state.news.category,
  );

  const dispatch = useDispatch<ThunkDispatch<Store, any, AnyAction>>();

  const updateCategory = (title: Category) => {
    dispatch(setCategory(title));
  };

  return (
    <ScrollView
      className="bg-neutral-700 flex-row grow-0"
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {Object.values(Category).map(title => (
        <TouchableWithoutFeedback
          key={title}
          onPress={() => updateCategory(title)}>
          <Text
            className={`px-3 p-3 text-neutral-400 ${
              activeCategory === title ? 'border-b-2 border-blue-500' : ''
            }`}>
            {title}
          </Text>
        </TouchableWithoutFeedback>
      ))}
    </ScrollView>
  );
};

export default NewsCategory;
