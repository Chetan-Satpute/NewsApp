import {API_OPTIONS, API_URL} from '..';
import {NewsArticle} from '../../redux/news/newsSlice';

const getNews = async (params: Record<string, string>) => {
  const paramsString = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');

  const response = await fetch(`${API_URL}?${paramsString}`, API_OPTIONS);

  const {articles} = (await response.json()) as {articles: NewsArticle[]};

  return articles;
};

export const getNewsByCategory = async (category: string) => {
  return getNews({category: category.toLowerCase(), country: 'in'});
};

export const getNewsByQuery = async (query: string) => {
  return getNews({q: query, country: 'in'});
};
