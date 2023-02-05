import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import getNews from '../../api/news/getNews';

export interface NewsArticle {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface News {
  articles: NewsArticle[];
}

const initialState: News = {
  articles: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<News>) => {
        state.articles = [...action.payload.articles];
      },
    );
  },
});

export const fetchArticles = createAsyncThunk(
  'news/fetchArticles',
  async () => {
    const data = (await getNews()) as News;

    console.log(data);

    return data;
  },
);

export const newsReducer = newsSlice.reducer;
