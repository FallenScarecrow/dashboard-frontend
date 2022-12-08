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
      <div className="flex h-screen w-full items-center justify-center overflow-x-hidden bg-gradient-to-br from-sky-500/20 to-purple-500/20">
        <form
          className={clsx(
            'relative z-10 h-full w-full sm:h-2/3 sm:max-w-xl sm:rounded-xl',
            'sm:before:absolute sm:before:inset-0 sm:before:rotate-12 sm:before:rounded-xl sm:before:bg-neutral-900/10 sm:before:transition-colors sm:before:duration-500 sm:before:dark:bg-neutral-100/10',
            'sm:before:shadow-md sm:before:shadow-neutral-900/25 sm:before:backdrop-blur sm:before:dark:shadow-neutral-100/10',
          )}
        >
          <div className="h-full w-full overflow-hidden bg-neutral-100/50 py-16 px-20 shadow-md shadow-neutral-100/50 backdrop-blur transition-colors duration-500 dark:bg-neutral-900/50 dark:shadow-neutral-900/50 sm:rounded-xl">
            {children}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginLayout;
