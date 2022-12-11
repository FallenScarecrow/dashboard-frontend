import clsx from 'clsx';
import { ReactNode } from 'react';

import ButtonTheme from '~@components/ButtonTheme';

type LoginLayoutProps = {
  children: ReactNode;
};

const LoginLayout = ({ children }: LoginLayoutProps) => {
  return (
    <div className="flex min-h-full w-full flex-col justify-between">
      <div className="absolute top-5 right-5 z-50">
        <ButtonTheme />
      </div>
      <div className="flex h-screen w-full items-center justify-center overflow-x-hidden bg-gradient-to-br from-sky-500/40 to-purple-500/40">
        <div
          className={clsx(
            'relative z-10 w-full sm:max-w-xl sm:rounded-xl',
            'sm:before:absolute sm:before:inset-0 sm:before:rotate-12 sm:before:rounded-xl sm:before:bg-neutral-900/10 sm:before:transition-colors sm:before:duration-500 sm:before:dark:bg-neutral-100/10',
            'sm:before:shadow-md sm:before:shadow-neutral-900/25 sm:before:backdrop-blur sm:before:dark:shadow-neutral-100/10',
          )}
        >
          <div
            className={clsx(
              'w-full overflow-hidden px-20 pt-16 pb-8 shadow-md backdrop-blur transition-colors duration-500 sm:rounded-xl',
              'bg-neutral-100/20 dark:bg-neutral-900/20',
              'shadow-neutral-100/20 dark:shadow-neutral-900/20',
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
