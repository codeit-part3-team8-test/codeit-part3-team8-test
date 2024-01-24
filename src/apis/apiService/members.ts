import instance from '@/apis/axiosInstance';

const Members = {
  get: () => instance.get('/members'),

  delete: (memberId: number) => instance.delete(`members/${memberId}`),
};

export default Members;
