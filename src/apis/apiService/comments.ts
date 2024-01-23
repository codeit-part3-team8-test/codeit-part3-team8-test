import instance from '@/apis/axiosInstance';

const Comments = {
  create: (value: object) => instance.post('/comments', value),

  getList: () => instance.get('/comments'),

  edit: (commentId: number, content: string) =>
    instance.put(`/comments/${commentId}`, { content }),

  delete: (commentId: number) => instance.delete(`/comments/${commentId}`),
};

export default Comments;
