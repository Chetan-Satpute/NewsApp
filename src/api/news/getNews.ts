import {API_URL} from '..';

const getNews = async (category: string) => {
  const response = await fetch(
    `${API_URL}/?category=${category.toLowerCase()}`,
  );
  const data = await response.json();

  return data;
};

export default getNews;
