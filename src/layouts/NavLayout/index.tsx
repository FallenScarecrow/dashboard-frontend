import React, { useState } from 'react';
import clsx from 'clsx';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  IoDesktopOutline,
  IoDesktopSharp,
  IoGridOutline,
  IoHomeSharp,
  IoLogOutOutline,
  IoMailSharp,
  IoMenu,
  IoPeopleOutline,
  IoPeopleSharp,
  IoPersonCircleSharp,
  IoSettingsOutline,
} from 'react-icons/io5';
import { ImMinus } from 'react-icons/im';

import { TDefaultLayoutProps } from '~@types/layouts';

import Typography from '~@components/Typography';
import Button from '~@components/Button';

const NavLayout = ({ children }: TDefaultLayoutProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(true);
  };

  const handleCloseNav = (e: React.MouseEvent) => {
    if (e.target == e.currentTarget) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <TransitionGroup id="nav" className="absolute top-0 z-50 bg-transparent">
        {menuOpen ? (
          <CSSTransition timeout={500} classNames="fade">
            <div
              className="absolute inset-0 flex h-screen w-screen translate-y-0 flex-col items-center justify-center bg-black/30 backdrop-blur transition-opacity"
              style={{ transitionDuration: '200ms' }}
              onClick={e => handleCloseNav(e)}
            >
              <div
                className={clsx(
                  'relative flex h-full w-full flex-col border-2 bg-white p-0',
                  'md:h-2/3 md:max-w-2xl xl:max-w-5xl 2xl:max-w-7xl',
                  // '2xl:w-1/3',
                  // 'grid grid-cols-12 grid-rows-6',
                  'border-brutal-black shadow-neubrutalism shadow-black',
                )}
              >
                <div
                  className={clsx(
                    'flex w-full items-center border-b-2 border-brutal-black',
                    'cursor-default bg-brutal-green p-4',
                    'text-shadow-neubrutalism text-start text-white',
                  )}
                >
                  <span className="align-middle text-4xl">Game Paused</span>
                  <ImMinus
                    className="drop-shadow-neubrutalism ml-auto cursor-pointer self-end"
                    onClick={() => setMenuOpen(false)}
                  />
                </div>

                <div
                  className={clsx(
                    // 'col-span-12 row-start-2 row-end-7',
                    'flex-1 basis-px overflow-hidden overflow-y-auto p-4',
                    'grid auto-rows-min grid-cols-1 gap-4 sm:grid-cols-2',
                  )}
                >
                  {[
                    { icon: <IoHomeSharp />, title: 'Home' },
                    { icon: <IoPeopleSharp />, title: 'User' },
                    { icon: <IoDesktopSharp />, title: 'Conferences' },
                  ].map((menu, i) => (
                    <div
                      key={menu.title}
                      className={clsx(
                        i == 0 ? 'bg-brutal-green' : 'hover:bg-brutal-green',
                        'border-2 border-brutal-black text-white shadow-neubrutalism shadow-black',
                        'peer relative flex cursor-pointer items-center gap-4 p-2 px-4',
                      )}
                    >
                      <Typography
                        component="div"
                        size="large"
                        variant="body"
                        className="text-brutal-black"
                      >
                        {menu.icon}
                      </Typography>
                      <Typography
                        component="span"
                        size="small"
                        variant="heading"
                        className="font-extrabold tracking-widest text-brutal-black"
                      >
                        {menu.title}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CSSTransition>
        ) : null}
      </TransitionGroup>

      <div className={clsx('h-screen w-full', menuOpen ? 'overflow-hidden' : 'overflow-y-auto')}>
        <div className="flex min-h-screen flex-col">
          <div
            className={clsx(
              'grid-cols-12 items-center border-b-2 border-black text-4xl',
              menuOpen ? 'grid' : 'hidden',
            )}
          >
            <div className="col-span-2 justify-self-stretch bg-brutal-black p-2 text-center sm:col-span-1 md:justify-self-start">
              <Button icon={IoMenu} onClick={handleClick} className="text-white" />
            </div>
            <Typography
              component="div"
              variant="heading"
              size="large"
              className={clsx(
                'text-shadow-neubrutalism py-2 text-center tracking-widest text-white',
                'h-full border-x-2 border-brutal-black bg-brutal-green',
                'col-span-7 sm:col-span-9 md:col-span-4 md:col-start-5 xl:col-span-2 xl:col-start-6',
              )}
            >
              Scarecrow
            </Typography>
            <div className="col-span-3 col-start-10 flex h-full justify-end justify-self-stretch bg-brutal-black sm:col-span-2 sm:col-start-11 md:justify-self-end">
              <div className="relative flex items-center px-4">
                <IoMailSharp size={30} className="text-white" />
                <Typography
                  component="span"
                  size="small"
                  variant="label"
                  className="absolute right-0 top-0 flex -translate-x-1/3 items-center justify-center rounded-full bg-red-500 text-white"
                  style={{ minHeight: '1.25rem', minWidth: '1.25rem' }}
                >
                  3
                </Typography>
              </div>
              <div className="flex items-center px-4">
                <IoPersonCircleSharp size={30} className="text-white" />
              </div>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-12">
            <div className="col-span-3 flex flex-col border-r-2 border-black p-4 xl:col-span-2">
              <Typography
                component="div"
                variant="heading"
                size="large"
                className={clsx(
                  'relative self-center p-2 text-center tracking-widest',
                  'before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-brutal-seafoam',
                  // 'col-span-7 sm:col-span-9 md:col-span-4 md:col-start-5 xl:col-span-2 xl:col-start-6',
                )}
              >
                <span className="relative text-brutal-black">Scarecrow</span>
              </Typography>
              <nav className="mx-auto mt-12 w-10/12">
                <ul>
                  {[
                    { icon: IoGridOutline, title: 'Overview' },
                    { icon: IoPeopleOutline, title: 'User' },
                    { icon: IoDesktopOutline, title: 'Conferences' },
                    { icon: IoSettingsOutline, title: 'Settings' },
                  ].map(({ icon: Icon, title }, i) => (
                    <Typography
                      component="li"
                      variant="heading"
                      size="small"
                      key={title}
                      className={clsx(
                        i == 0 && 'border-brutal-black bg-brutal-seafoam shadow-brutal-black',
                        i != 0 &&
                          'border-white shadow-white hover:border-brutal-black hover:bg-brutal-seafoam hover:shadow-brutal-black',
                        'mt-4 cursor-pointer rounded-full border-2 py-2 px-6 text-brutal-black shadow-neubrutalism',
                      )}
                    >
                      <div className="flex w-full items-center gap-4">
                        <Icon />
                        {title}
                      </div>
                    </Typography>
                  ))}
                </ul>
              </nav>
              <hr className="mx-auto mt-auto w-10/12" />
              <div className="mx-auto w-10/12">
                <ul>
                  <Typography
                    component="li"
                    variant="heading"
                    size="small"
                    className={clsx(
                      'border-white shadow-white hover:border-brutal-black hover:bg-brutal-seafoam hover:shadow-brutal-black',
                      'mt-4 cursor-pointer rounded-full border-2 py-2 px-8 text-red-600 shadow-neubrutalism',
                    )}
                  >
                    <div className="flex w-2/3 items-center gap-4">
                      <IoLogOutOutline /> Logout
                    </div>
                  </Typography>
                </ul>
              </div>
            </div>
            <main className="col-span-9 bg-brutal-seafoam/10 bg-dotted bg-repeat pl-6 xl:col-span-10">
              {children}
            </main>
          </div>
          {/* <footer className="h-20 bg-brutal-black">Footer</footer> */}
        </div>
      </div>
    </>
  );
};

export default NavLayout;
