import api from './api';

export default {
  getResidenceById: ({ residenceId }) =>
    api.get(`/residence/${residenceId}`),
  saveResidence: ({ payload }) =>
    api.post(`/residence`, payload)
};
