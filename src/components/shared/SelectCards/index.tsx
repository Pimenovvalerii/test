import React, { useEffect, useMemo, FC } from 'react';
import { Select } from 'antd';

import CardIcon from '../../../icons/CardIcon';
import ArrowIcon from '../../../icons/ArrowIcon';

import './styles.scss';

type ISelectCards = {
  getData: (data: string) => void;
}

const SelectCards: FC<ISelectCards> = ({getData}) => {
  const { Option } = useMemo(() => Select, []); 
  const provinceData = [
    {
      key: 'card',
      value:'Банковская карта',
    }, 
    {
      key: 'bitcoin',
      value:'Биткоин ',
    },
    {
      key: 'invoice',
      value:'Выставить счет',
    },
  ];

  const handleProvinceChange = (paiment: any) => {
    getData(paiment);
  };

  useEffect(() => {
    getData(provinceData[0].value);
  },[]);
  
  return (
    <div className='select-cards'>
      <Select 
        defaultValue={provinceData[0].value} 
        style={{ width: 390 }} 
        onChange={handleProvinceChange}
        suffixIcon={<ArrowIcon/>}
      >
        {provinceData.map(province => (
          <Option 
            key={province.key}
            value={province.value}
          >
            <>
              {province.key === 'card' && <CardIcon />}
              {province.key === 'bitcoin' && <CardIcon />}
              {province.key === 'invoice' && <CardIcon />}
              <span className='pl-5'>
                {province.value}
              </span>
            </>
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default SelectCards;
