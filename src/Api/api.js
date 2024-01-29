import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const authApi = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
