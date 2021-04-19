import axios from 'axios';

import defaultsDeep from 'lodash/defaultsDeep';

const config = {
  baseURL: (axios.defaults.baseURL = '/heat-service/api'),
  headers: {}
};

const BaseApi = axios.create(config);

BaseApi.request = (path, options) => {
  const mergedOptions = defaultsDeep(options, config);

  return BaseApi(path, mergedOptions).then((resp) => resp.data);
};

export default BaseApi;
