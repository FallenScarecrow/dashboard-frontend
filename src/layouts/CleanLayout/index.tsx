import React from 'react';

import { TDefaultLayoutProps } from '~@types/layouts';

import ButtonTheme from '~@components/ButtonTheme';

const CleanLayout = ({ children }: TDefaultLayoutProps) => {
  return (
    <div className="flex min-h-full w-full flex-col justify-between">
      <div className="absolute top-5 right-5 z-50">
        <ButtonTheme />
      </div>
      {children}
    </div>
  );
};

export default CleanLayout;
