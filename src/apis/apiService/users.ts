import instance from '@/apis/axiosInstance';

const Users = {
  signup: () => instance.post('/users'),

  get: () => instance.get('/users/me'),

  edit: (value: object) => instance.put('/users/me', value),

  uploadImage: (url: string) => instance.post('/users/me/image', { url }),
};

export default Users;
