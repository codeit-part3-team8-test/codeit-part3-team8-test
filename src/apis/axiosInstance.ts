import axios from 'axios';
import LocalStorage from '@/services/localStorage';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_LINKBRARY_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = LocalStorage.getItem('accessToken');
    if (token) {
      config.headers['Content-Type'] = 'application/json';
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error.response);
  }
);

export default instance;
