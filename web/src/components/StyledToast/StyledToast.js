import React from 'react';
import styled from 'styled-components';
import {toast, ToastContainer} from 'react-toastify';

import {variables} from '../Theme';

import 'react-toastify/dist/ReactToastify.css';

const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: ${variables.clrSupport};
  }

  .Toastify__toast--success {
    background: ${variables.clrSuccess};
  }

  .Toastify__toast--warning {
    background: ${variables.clrWarning};
  }

  .Toastify__toast--error {
    background: ${variables.clrError};
  }
`;

export const showToast = (type, message) => {
  switch (type) {
    case 'success':
      toast.success(message);
      break;
    case 'warn':
      toast.warn(message);
      break;
    case 'error':
      toast.error(message);
      break;
    default:
      toast.info(message);
  }
};

export default function StyledToast() {
  return <Toast/>;
}