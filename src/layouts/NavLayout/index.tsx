import React, { ReactNode, useState } from 'react';
import clsx from 'clsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
  IoDesktopSharp,
  IoHomeSharp,
  IoMailSharp,
  IoMenu,
  IoPeopleSharp,
  IoPersonCircleSharp,
} from 'react-icons/io5';

import Button from '~@components/Button';
import Typography from '~@components/Typography';
import { useTheme } from 'next-themes';

type LayoutProps = {
  children: ReactNode;
};

const NavLayout = ({ children }: LayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme: currentTheme, setTheme } = useTheme();

  const handleClick = () => {
    setMenuOpen(true);
  };

  const handleCloseNav = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full">
      <TransitionGroup id="nav" className={clsx('absolute top-0 z-50 bg-transparent')}>
        {menuOpen ? (
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="absolute inset-0 h-screen w-screen translate-y-0 bg-black/50 backdrop-blur transition-opacity"
              style={{ transitionDuration: '200ms' }}
              onClick={handleCloseNav}
            />
          </CSSTransition>
        ) : null}
        {menuOpen ? (
          <CSSTransition timeout={500} classNames="slide">
            <div
              className={clsx(
                'absolute inset-y-0 left-0 h-screen w-80 border-r-2 border-neutral-100 bg-neutral-100 p-0 shadow-lg shadow-neutral-100',
                'dark:border-neutral-900 dark:bg-neutral-900 dark:shadow-neutral-900',
              )}
            >
              <div className="flex h-full w-full flex-col">
                <div className="flex h-12 items-center gap-2 px-4">
                  <Button icon={<IoMenu size={30} />} onClick={handleCloseNav} />
                  <Typography component="div" variant="heading" size="medium">
                    Scarecrow
                  </Typography>
                </div>
                <div className="my-2 mx-4 border-t-2 border-neutral-700" />
                <div className="h-20 px-4">
                  <Typography component="div" size="medium" variant="title" className="mb-2">
                    Appearence
                  </Typography>
                  <div
                    className={clsx(
                      'relative grid h-11 grid-cols-12 rounded-full bg-neutral-300 p-1 shadow-inner shadow-neutral-500',
                      'dark:border-2 dark:border-neutral-700 dark:bg-neutral-700 dark:shadow-black/75',
                    )}
                  >
                    <div
                      className="absolute top-1/2 left-1 z-0 h-8 w-24 -translate-y-1/2 rounded-full bg-neutral-100 shadow-sm shadow-neutral-500 transition-transform dark:bg-neutral-800 dark:shadow-black"
                      style={
                        {
                          '--tw-translate-x':
                            (currentTheme == 'light' ? 96 : currentTheme == 'dark' ? 185 : 0) + '%',
                          // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        } as any
                      }
                    />
                    {['system', 'light', 'dark'].map(val => (
                      <button
                        key={val}
                        onClick={() => setTheme(val)}
                        className="z-10 col-span-4 rounded-full text-center capitalize"
                      >
                        {val}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="my-2 mx-4 border-t-2 border-neutral-700" />
                <div className="flex-1 basis-px overflow-hidden overflow-y-auto px-4">
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
              </div>
            </div>
          </CSSTransition>
        ) : null}
      </TransitionGroup>

      <div className="flex min-h-screen flex-col">
        <div className="flex h-12 items-center px-4 text-4xl">
          <Button icon={<IoMenu size={30} />} onClick={handleClick} />
          <Typography component="div" variant="heading" size="large" className="ml-2">
            Scarecrow
          </Typography>
          <div className="ml-auto flex items-center gap-4">
            <div className="relative">
              <IoMailSharp size={30} />
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
              <IoPersonCircleSharp size={30} />
            </div>
          </div>
        </div>
        <main className="flex-1 p-4">{children}</main>
        {/* <footer className="h-20 bg-neutral-800">Footer</footer> */}
      </div>
    </div>
  );
};

export default NavLayout;
