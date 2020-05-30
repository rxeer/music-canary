import axios from 'axios';

import { getToken } from './token';

const token: string = getToken();

const emptyObject = {};
export const API_URL = 'https://shielded-brook-74168.herokuapp.com/api/v1';

const request = async (
  url: string,
  method = 'get',
  data: any = emptyObject
) => {
  const config: any = {
    url,
    method,
    data,
    baseURL: API_URL,
    responseType: 'json',
  };

  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  try {
    return await axios(config);
  } catch (error) {
    throw new Error(error.message);
  }
};

export default request;
