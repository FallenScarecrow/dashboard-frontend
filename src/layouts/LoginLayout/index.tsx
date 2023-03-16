import React from 'react';
import clsx from 'clsx';

import { TDefaultLayoutProps } from '~@types/layouts';

import ButtonTheme from '~@components/ButtonTheme';

const LoginLayout = ({ children }: TDefaultLayoutProps) => {
  return (
    <div className="flex min-h-full w-full flex-col justify-between">
      <div className="absolute top-5 right-5 z-50">
        <ButtonTheme />
      </div>
      <div className="flex h-screen w-full items-center justify-center overflow-x-hidden bg-brutal-seafoam/20 bg-dotted bg-repeat">
        <div
          className={clsx(
            'relative z-10 w-full bg-white px-10 py-8',
            'border-2 border-brutal-black shadow-neubrutalism shadow-brutal-black',
            'sm:max-w-xl sm:rounded-xl',
          )}
        >
          <div className="w-full transition-colors duration-500 sm:rounded-xl">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
