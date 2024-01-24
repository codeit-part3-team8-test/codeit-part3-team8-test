import instance from '@/apis/axiosInstance';

const Columns = {
  create: (value: object) => instance.post('/columns', value),

  getList: () => instance.get('/columns'),

  edit: (columnId: number, title: string) =>
    instance.put(`/columns/${columnId}`, { title }),

  delete: (columnId: number) => instance.delete(`/columns/${columnId}`),

  uploadImage: (columnId: number, imageUrl: string) =>
    instance.post(`/columns/${columnId}/card-image`, { imageUrl }),
};

export default Columns;
