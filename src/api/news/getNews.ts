import {API_URL} from '..';

const getNews = async () => {
  const response = await fetch(`${API_URL}/`);
  const data = await response.json();

  return data;
};

export default getNews;
