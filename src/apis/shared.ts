import Api from './api';

interface ApiResponse {
  folders: object;
}

const getSharedData = async (): Promise<ApiResponse> => {
  const res = await Api.getSharedData();
  return res.data.folder;
};

export default getSharedData;
