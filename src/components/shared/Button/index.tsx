import React, { FC, MouseEvent } from 'react';

import './styles.scss';

type IButton = {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<IButton> = ({
  onClick,
  children,
}) => (
  <button
    onClick={onClick}
    className='button'
  >
    {children}
    <span className='button__blur'></span>
  </button>
);


export default Button;
