import React, { useState } from 'react';

import Button from '../../components/shared/Button';
import Modal from '../../components/shared/Modal';
import SubscriptionModal from '../../components/modal-template/SubscriptionModal';

import './styles.scss';

const Subscription = () => {
  const [activeModal, setActiveModal] = useState(false);
  const handleHideModal = (): void => {
    setActiveModal((prev) => !prev);
  };

  const handleOpenModal = (): void => {
    setActiveModal((prev) => !prev)
  };

  return (
    <div className='subscription'>
      <Button
        onClick={handleOpenModal}  
      >
        Открыть  модалку
      </Button>
      {activeModal && (
        <Modal
          visible={activeModal}
          onCancel={handleHideModal}  
        >
          <SubscriptionModal />
        </Modal>
      )}
        
    </div>
  );
};

export default Subscription;
