import React, { useState } from 'react';

import Timer from '../../shared/Timer';
import Button from '../../shared/Button';
import Alert from '../../shared/Alert';
import SelectCards from '../../shared/SelectCards';
import Subtitle from '../../shared/Subtitle';
import PriceCards from '../../PriceCards';

import './styles.scss';

const SubscriptionModal = () => {
  const [howAlert, setShowAlert] = useState(false)
  const [state, setState] = useState({
    currentPrice: '',
    currentBenefit: '',
    typePayment: '',
  });

  const handleGetCurrentPrice = (data: {
    price: string,
    benefit: string,
  }) => {
    setState(prev => ({...prev, currentPrice: data.price, currentBenefit: data.benefit}));
  };

  const handleGetTypePayment = (payment: string) => {    
    setState(prev => ({...prev, typePayment: payment}));
  };

  const handleUpCard = () => {
    setShowAlert(true);
  };

  return (
    <div>
      {howAlert && (
        <Alert
          message={<div>{`Способ оплаты: ${state.typePayment}. Сума оплаты: ${state.currentPrice}`}</div>}
          onClose={() => setShowAlert(false)}
        />
      )}
      <Timer seconds={10} position='center'/>
      <Subtitle 
        size='extra'
        fontWeight='700'
        align='center'
        className='pt-27 pb-30'
      >
        Увеличьте свой депозит!
      </Subtitle>
      <div className='d-flex justify-content--center pb-51'>
        <SelectCards getData={handleGetTypePayment}/>
      </div>
      <PriceCards getData={handleGetCurrentPrice}/>
      <div className='d-flex align-items--center justify-content--center pt-46 pb-24'>
        <Subtitle 
          size='medium'
          color='green'
          fontWeight='700'
        >
          {`$${state.currentBenefit}`}
        </Subtitle>
        <Subtitle 
          size='extraSmall'
          color='green'
          className='pr-5'
        >
          ,00
        </Subtitle>
        <Subtitle 
          size='extraSmall'
        >
          будет зачислено вам на счет
        </Subtitle>
      </div>
      <div className='d-flex justify-content--center pb-23'>
        <Button        
          onClick={handleUpCard}  
        >
          Пополнить
        </Button>
      </div>
      <Subtitle 
          size='small'
          color='grey'
          fontWeight='500'
          align='center'
          className='pl-46 pr-46'
        >
        При пополнении счета с банковской карты списание средств происходит по курсу банка клиента
      </Subtitle>
      <div className='d-flex justify-content--center pt-8'>
        <Subtitle 
            size='small'
            color='grey'
            fontWeight='700'
            align='center'
            upper='upper'
            link='link'
          >
          <a href='/' target='_black'>Подробнее</a>
        </Subtitle>
      </div>
    </div>
  );
};

export default SubscriptionModal;
