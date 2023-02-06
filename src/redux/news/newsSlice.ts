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
  loading: boolean;
  articles: NewsArticle[];
}

const initialState: News = {
  loading: true,
  articles: [],
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
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

    return data;
  },
);

export const newsReducer = newsSlice.reducer;
export const {setLoading} = newsSlice.actions;
