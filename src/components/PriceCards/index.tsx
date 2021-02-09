import React, { useState, FC, useEffect } from 'react';
import classNames from 'classnames';

import randomKey from '../../utils/randomKey';

import CheckIcon from '../../icons/CheckIcon';
import Subtitle from '../shared/Subtitle';

import './styles.scss';

type IPriceCards = {
  getData: (data: {
    price: string,
    benefit: string,
  }) => void;
};

type IPrices = {
  value: string;
  price: string;
  benefit: string;
  checked: boolean;
}

const PriceCards:FC<IPriceCards> = ({getData}) => {
  const [prices, setPrices] = useState<Array<IPrices>>([
    {
      value:'a',
      price: '50',
      benefit: '100',
      checked: false,
    },
    {
      value:'b',
      price: '500',
      benefit: '1000',
      checked: true,
    },
    {
      value:'c',
      price: '100',
      benefit: '200',
      checked: false,
    },
  ])
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const { id } = event.target;
    
    setPrices((prev) => {
      return prev.map((elem) => {
        if(elem.value === id) {
          const newValue = {...elem, checked: true};
          return newValue;
        };

        const newValue = {...elem, checked: false};
        return newValue;
      })
    })

    const currentPrice = prices.filter(price => price.value === id);
    getData(currentPrice[0]);
  }

  useEffect(()=> {
    const currentPrice = prices.filter(price => price.checked);
    getData(currentPrice[0]);
  },[]);

  return (
    <div className='price__cards'>  
        {
          prices.map((elem => {
            return (
              <label className={classNames('price__card',{
                'price__card--active': elem.checked,
                })}
                key={randomKey()}
                htmlFor={elem.value}
              >
                <input 
                  className='price__input' 
                  type="radio" name="group1" 
                  id={elem.value} 
                  value={elem.benefit} 
                  onChange={onChange}
                />
                <Subtitle 
                  size='small'
                  align='center'
                  fontWeight='700'
                  className='pb-11'
                >
                  Пополнить на
                </Subtitle>
                <Subtitle 
                  size='big'
                  align='center'
                  className='pb-19'
                >
                  {elem.price}
                </Subtitle>                 
                <Subtitle 
                  size='small'
                  align='center'
                  color='green'
                  fontWeight='700'
                  className='pb-11'
                >
                  Получить 
                </Subtitle>
                <Subtitle 
                  size={elem.checked ? 'extra': 'big'}
                  fontWeight={elem.checked ? '300' : ''}
                  align='center'
                  color='green'
                >
                  {elem.benefit}
                </Subtitle>                 
                <div className='price__bottom-icon'>
                  {elem.checked ? (
                    <CheckIcon />
                  ) : (
                    <div className='price__circle'></div>
                  )}
                </div>         
              </label>
            )
          }))
        }
    </div>
  );
};


export default PriceCards;
