import BaseApi from './index';

import {showToast} from '../../components/StyledToast';

export const registerAxiosInterceptors = () => {

  BaseApi.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
  );

  BaseApi.interceptors.response.use(
    (response) => response,
    (error) => {
      switch (error.response.status) {
        case 500:
          showToast('error',`${error.response.data.message}`);
          break;
        case 401:
          showToast('error','Unauthorized');
          break;
        case 400:
          showToast('error',error.response.data.message);
          break;
        default:
          break;
      }

      return Promise.reject(error);
    }
  );
};
