import axios from 'axios';
import * as tokenRepository from './tokenRepository';

export const instance = axios.create({
  baseURL: 'https://reactlabapi.herokuapp.com/api/',
  timeout: 1000,
});

instance.interceptors.request.use((request) => {
  request.headers = {
    Authorization: `Bearer ${tokenRepository.getToken()}`,
    accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return request;
});
