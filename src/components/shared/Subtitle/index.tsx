import React, { FC, ReactNode } from 'react';
import classNames from 'classnames';

import './styles.scss';

type ISubtitle = {
  children: ReactNode;
  size: string;
  align?: string;
  color?: string;
  fontWeight?: string;
  upper?: string;
  link?: string;
  className?: string;
}

const Subtitle: FC<ISubtitle> = ({
  children,
  size,
  align,
  color,
  fontWeight,
  upper,
  link,
  className,
}) => {
  const subtitleClasses = classNames(
    className,
    'subtitle',
    `subtitle--${size}`,
    `subtitle--${color}`,
    `subtitle--${align}`,
    `subtitle--${upper}`,
    `subtitle--${link}`,
    `subtitle--${fontWeight}`,
  );
  return <div className={subtitleClasses}>{children}</div>;
};

export default Subtitle;
