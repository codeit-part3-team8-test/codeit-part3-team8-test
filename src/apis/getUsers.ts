import Api from './api';

interface ApiResponse {
  user: object;
}

const getUsers = async (): Promise<ApiResponse> => {
  const res = await Api.getUsers();
  return res.data.data[0];
};

export default getUsers;
