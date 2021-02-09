import React, { FC, ReactNode } from 'react';
import { Alert } from 'antd';

import CloseIcon from '../../../icons/CloseIcon';

type IAlertMessage = {
  message: ReactNode;
  onClose?: () => void;
}

const AlertMessage: FC<IAlertMessage> = ({
  message,
  onClose,

}) => {
  return (
    <Alert
      message={message}
      closeText={<CloseIcon />}
      closable
      onClose={onClose}
    />
  );
};

export default AlertMessage;
