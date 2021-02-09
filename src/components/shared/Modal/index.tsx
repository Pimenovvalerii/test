import React, { FC } from 'react';
import { Modal } from 'antd';

import CloseIcon from '../../../icons/CloseIcon';

import './styles.scss';

type IMainModal = {
  visible: boolean;
  onCancel: () => void;
  className?: string; 
}

const MainModal: FC<IMainModal> = ({
  visible,
  onCancel,
  children,
  className,
}) => {
  
  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      className={className}
      footer={null}
      closable
      closeIcon={<CloseIcon />}
      width={600}
    >
      <div className='wrap-modal'>
        <div className='wrap-modal__top-icon'>
          + 100%
        </div>
        {children}
      </div>
    </Modal>
  );
};

export default MainModal;
