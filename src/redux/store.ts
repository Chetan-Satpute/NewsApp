import {configureStore} from '@reduxjs/toolkit';
import {News, newsReducer} from './news/newsSlice';

export interface Store {
  news: News;
}

export const store = configureStore<Store>({
  reducer: {
    news: newsReducer,
  },
});
