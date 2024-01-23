import instance from '@/apis/axiosInstance';

const Auth = {
  login: (value: object) => instance.post('/auth/login', value),
  editPassword: (value: object) => instance.put('/auth/password', value),
};

export default Auth;
