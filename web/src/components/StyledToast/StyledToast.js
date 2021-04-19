import React from 'react';
import styled from 'styled-components';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = styled(ToastContainer)`
  .Toastify__toast--info {
    background: #13B4F9;
  }

  .Toastify__toast--success {
    background: #8FD114;
  }

  .Toastify__toast--warning {
    background: #FFB144;
  }

  .Toastify__toast--error {
    background: #FF3D32;
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