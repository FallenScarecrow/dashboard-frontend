import React, { ReactNode } from 'react';
import clsx from 'clsx';
import {
  IoDesktopSharp,
  IoHomeSharp,
  IoMailSharp,
  IoPeopleSharp,
  IoPersonCircleSharp,
} from 'react-icons/io5';

import Typography from '~@components/Typography';

type SimplePageLayoutProps = {
  children: ReactNode;
};

const SimplePageLayout = ({ children }: SimplePageLayoutProps) => {
  return (
    <div className="h-screen">
      <div className="flex h-12 items-center px-4 text-4xl">
        <Typography component="div" variant="heading" size="large" className="ml-12">
          Scarecrow
        </Typography>
        <div className="ml-auto flex items-center gap-4">
          <div className="relative">
            <IoMailSharp className="col-span-2" size={30} />
            <Typography
              component="span"
              size="small"
              variant="label"
              className="absolute right-0 top-0 flex translate-x-1/2 -translate-y-1/3 items-center justify-center rounded-full bg-red-500 text-white"
              style={{ minHeight: '1.25rem', minWidth: '1.25rem' }}
            >
              3
            </Typography>
          </div>
          <div>
            <IoPersonCircleSharp className="col-span-2" size={30} />
          </div>
        </div>
      </div>
      <div className="flex max-h-[calc(100vh-3rem)]">
        <div className="w-80 overflow-hidden overflow-y-auto px-4 pt-4">
          <div>
            {[
              { icon: <IoHomeSharp />, title: 'Home' },
              { icon: <IoPeopleSharp />, title: 'User' },
              { icon: <IoDesktopSharp />, title: 'Conferences' },
            ].map(menu => (
              <div
                key={menu.title}
                className={clsx(
                  menu.title == 'Home'
                    ? 'bg-neutral-300 dark:bg-neutral-700'
                    : 'hover:bg-neutral-300/50 dark:hover:bg-neutral-700/50',
                  'peer flex cursor-pointer items-center gap-4 rounded-md p-2 px-4 peer-[]:mt-2',
                )}
              >
                <Typography component="div" size="large" variant="body">
                  {menu.icon}
                </Typography>
                <Typography
                  component="span"
                  size="large"
                  variant="body"
                  className="font-extrabold text-inherit drop-shadow-2xl"
                >
                  {menu.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <main className="flex-1 overflow-hidden overflow-y-auto p-4">{children}</main>
      </div>
      {/* <footer className="h-20 bg-neutral-800">Footer</footer> */}
    </div>
  );
};

export default SimplePageLayout;
