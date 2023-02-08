import env from '../env';

export const API_URL = env.API_URL;
export const API_OPTIONS = {
  method: 'GET',
  headers: {Authorization: env.API_KEY},
};

console.log(API_URL);
