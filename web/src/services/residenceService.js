import api from './api';

export default {
  getAllResidences: () =>
    api.get(`/residence/`),
  saveResidence: ({ payload }) =>
    api.post(`/residence`, payload)
};
