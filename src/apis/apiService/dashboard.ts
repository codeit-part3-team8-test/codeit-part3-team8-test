import instance from '@/apis/axiosInstance';

const Dashboards = {
  create: (value: object) => instance.post('/dashboards', value),

  getList: () => instance.get('/dashboards'),

  get: (dashboardId: number) => instance.get(`/dashboards/${dashboardId}`),

  edit: (dashboardId: number, value: object) =>
    instance.put(`/dashboards/${dashboardId}`, value),

  delete: (dashboardId: number) => instance.delete(`/dashboards/${dashboardId}`),

  invite: (dashboardId: number, email: string) =>
    instance.post(`/dashboards/${dashboardId}/invitations`, { email }),

  getInviteList: (dashboardId: number) =>
    instance.get(`/dashboards/${dashboardId}/invitations`),

  deleteInvite: (dashboardId: number, invitationId: number) =>
    instance.delete(`/dashboards/${dashboardId}/invitations/${invitationId}`),
};

export default Dashboards;
