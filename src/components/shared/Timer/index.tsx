import React, {useState, useEffect, FC} from 'react';
import classNames from 'classnames';
import moment from 'moment';

import ClockIcon from '../../../icons/ClockIcon';

import './styles.scss';

type ITimer = {
  seconds: number;
  position: 'start' | 'center' | 'left';
}

const Timer: FC<ITimer> = ({seconds, position}) => {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => --prev)
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  },[]);
  
  return (
    <div className={classNames('timer',`timer--${position}`)}>
      <div>
        <ClockIcon/>
      </div>
      <span>
        {moment.utc(time * 1000).format('HH:mm:ss')}
      </span>
    </div>
  );
};

export default Timer;
