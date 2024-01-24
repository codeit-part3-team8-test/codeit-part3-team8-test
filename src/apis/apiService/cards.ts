import instance from '@/apis/axiosInstance';

const Cards = {
  create: (value: object) => instance.post('/cards', value),

  getList: () => instance.get('/cards'),

  edit: (cardId: number, value: object) => instance.put(`/cards/${cardId}`, value),

  get: (cardId: number) => instance.get(`/cards/${cardId}`),

  delete: (cardId: number) => instance.delete(`/cards/${cardId}`),
};

export default Cards;
