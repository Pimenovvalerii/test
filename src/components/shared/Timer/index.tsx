import React, {useState, useEffect, useRef, FC } from 'react';
import classNames from 'classnames';
import moment from 'moment';

import ClockIcon from '../../../icons/ClockIcon';

import './styles.scss';

type ITimer = {
  seconds: number;
  position: 'start' | 'center' | 'left';
}

const Timer: FC<ITimer> = ({seconds, position}) => {
  const interval = useRef<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    interval.current = setInterval(() => {
      setTime(prev => --prev);
    }, 1000);

    return () => {
      if(typeof interval.current === 'number') {
        clearInterval(interval.current)
      };
    }
  },[]);

  useEffect(() => {
    if(time === 0) {
      if(typeof interval.current === 'number') {
        clearInterval(interval.current)
      };
    };
  },[time]);

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
