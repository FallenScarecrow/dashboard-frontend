import clsx from 'clsx';
import React from 'react';

import { TRowProps } from '~@types/components/Row';

const Row = ({ children, className = '' }: TRowProps) => {
  return <section className={clsx('grid grid-cols-12', className)}>{children}</section>;
};

export default Row;
