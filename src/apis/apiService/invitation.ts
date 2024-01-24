import instance from '@/apis/axiosInstance';

const Invitations = {
  get: () => instance.get('/invitations'),

  response: (invitationId: number, isAccepted: boolean) =>
    instance.put(`/invitations/${invitationId}`, isAccepted),
};

export default Invitations;
