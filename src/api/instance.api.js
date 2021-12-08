import axios from 'axios';
import * as tokenRepository from './tokenRepository';

export const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
});

instance.interceptors.request.use((request) => {
  const token = tokenRepository.getToken();
  if (token) {
    request.headers = {
      ...request.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return request;
});
