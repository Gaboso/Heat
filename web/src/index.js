import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import StyledToast from './components/StyledToast';
import {registerAxiosInterceptors} from './services/api/interceptors';
import {Theme} from './components/Theme';

registerAxiosInterceptors();

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <StyledToast/>
      <App/>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);

