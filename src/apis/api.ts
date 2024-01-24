import instance from './axiosInstance';

const Api = {
  getSharedData: () => instance.get('/api/sample/folder'),

  signin: (email: string, password: string) =>
    instance.post('/api/sign-in', { email, password }),

  getUsers: () => instance.get('/api/users'),
};

export default Api;
