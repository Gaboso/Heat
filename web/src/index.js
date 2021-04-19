import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import StyledToast from './components/StyledToast';
import {registerAxiosInterceptors} from './services/api/interceptors';

registerAxiosInterceptors();

ReactDOM.render(
  <React.StrictMode>
    <StyledToast/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

