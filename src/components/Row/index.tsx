import clsx from 'clsx';
import React from 'react';

const Row = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <section className={clsx('grid grid-cols-12 gap-4', className)}>{children}</section>;
};

export default Row;
