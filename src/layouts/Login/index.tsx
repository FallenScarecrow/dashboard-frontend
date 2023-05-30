import React from 'react';
import clsx from 'clsx';

import { TDefaultLayoutProps } from '~@types/layouts';

const Login = ({ children }: TDefaultLayoutProps) => {
  return (
    <div className="flex min-h-full w-full flex-col justify-between">
      <div className="flex h-screen w-full items-center justify-center overflow-x-hidden bg-gradient-to-br from-brutal-primary/40 to-brutal-secondary/40 bg-repeat">
        <div
          className={clsx(
            'relative z-10 h-full w-full overflow-y-auto overflow-x-hidden bg-brutal-surface px-10 py-8 text-brutal-on-surface transition-colors duration-500',
            'sm:border-4 sm:border-brutal-black sm:shadow-neubrutalism sm:shadow-brutal-black',
            'sm:h-fit sm:max-w-3xl',
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Login;
