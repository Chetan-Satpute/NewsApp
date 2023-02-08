import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import getNews, {getNewsByCategory} from '../../api/news/getNews';
import {Store} from '../store';

export interface NewsArticle {
  source: {
    id: string;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export enum Category {
  GENERAL = 'General',
  BUSINESS = 'Business',
  ENTERTAINMENT = 'Entertainment',
  HEALTH = 'Health',
  SCIENCE = 'Science',
  SPORTS = 'Sports',
  TECHNOLOGY = 'Technology',
}

export interface News {
  category: Category;
  loading: boolean;
  articles: {[id: string]: NewsArticle};
  bookmarks: {[id: string]: NewsArticle};
}

const initialState: News = {
  category: Category.GENERAL,
  loading: true,
  articles: {},
  bookmarks: {},
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCategory: (state, action: PayloadAction<Category>) => {
      state.category = action.payload;
    },
    loadArticles: (state, action: PayloadAction<NewsArticle[]>) => {
      for (let article of action.payload) {
        state.articles[article.url] = article;
      }
    },
    setBookmark: (state, action: PayloadAction<NewsArticle>) => {
      const article = action.payload;
      state.bookmarks[article.url] = article;
    },
    unsetBookmark: (state, action: PayloadAction<string>) => {
      delete state.bookmarks[action.payload];
    },
  },
});

export const newsReducer = newsSlice.reducer;
export const {
  setLoading,
  setCategory,
  setBookmark,
  unsetBookmark,
  loadArticles,
} = newsSlice.actions;

export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async (_, {dispatch, getState}) => {
    dispatch(setLoading(true));

    const {news} = getState() as Store;
    const articles = await getNewsByCategory(news.category);

    dispatch(loadArticles(articles));
    dispatch(setLoading(false));
  },
);
