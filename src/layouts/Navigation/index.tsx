import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import { IconType } from 'react-icons/lib';

import { IoGridOutline, IoLogOutOutline, IoMenuOutline, IoSearchOutline } from 'react-icons/io5';

import { TDefaultLayoutProps } from '~@types/layouts';

import { env } from '~@env/client.mjs';

import { useSession } from '~@lib/context/session.context';
import { useNavbar } from '~@lib/context/navbar.context';

import MainContainer from '~@components/MainComponent';
import Row from '~@components/Row';
import Typography from '~@components/Typography';
import TextField from '~@components/TextField';

const menuOptions = [
  { icon: IoGridOutline, title: 'Overview', href: '/' },
  // { icon: IoPeopleOutline, title: 'User', href: '/user' },
  // { icon: IoDesktopOutline, title: 'Conferences', href: '/conferences' },
  // { icon: IoSettingsOutline, title: 'Settings', href: '/settings' },
];

/* TODO: Component Page for Navbar and NavItems */
//#region
type NavItemProps = {
  active?: boolean;
  isHover?: boolean;
  children: React.ReactNode;
  className?: string;
};

type NavItemLinkProps = NavItemProps & {
  href: string;
};

type NavIconItemProps = Omit<NavItemLinkProps, 'children'> & {
  Icon: IconType;
  title: string;
};

const NavItem = forwardRef<HTMLLIElement, NavItemProps>(
  ({ active, isHover, children, className }, ref) => {
    const textClass = !className?.includes('text-')
      ? active
        ? 'text-brutal-on-primary'
        : 'text-brutal-secondary'
      : '';

    return (
      <li
        ref={ref}
        className={clsx(
          'peer flex aspect-square flex-col items-center overflow-x-hidden border-4 p-3 shadow-neubrutalism',
          'select-none lg:aspect-auto lg:flex-row lg:gap-6 lg:peer-[]:mt-2',
          '2xl:h-auto 2xl:justify-start',
          active && 'border-brutal-black bg-brutal-primary shadow-brutal-black',
          !active && 'border-brutal-surface shadow-brutal-surface',
          !active &&
            isHover &&
            'cursor-pointer hover:border-brutal-black hover:bg-brutal-primary/50 hover:shadow-brutal-black',
          `justify-center group-[.nav-open]/layout:lg:justify-start`,
          textClass,
          className,
        )}
      >
        {children}
      </li>
    );
  },
);

NavItem.displayName = 'NavItem';

function withLink(Component: React.FunctionComponent<NavItemProps>) {
  return class NavItemLink extends React.Component<NavItemLinkProps> {
    render() {
      const { href, ...rest } = this.props;

      if (href !== '') {
        return (
          <Link href={{ pathname: href, query: '' }} passHref>
            <Component {...rest} />
          </Link>
        );
      }

      return <Component {...rest} />;
    }
  };
}

const NavItemLink = withLink(NavItem);

NavItem.defaultProps = {
  active: false,
  isHover: false,
  className: '',
};

const NavIconItem = (props: NavIconItemProps) => {
  const { Icon, title, href, active, className, isHover } = props;

  const Nav = href ? NavItemLink : NavItem;

  return (
    <Nav href={href} active={active} isHover={isHover} className={className}>
      <Typography
        component="span"
        variant="heading"
        size="small"
        className="flex aspect-square h-10 items-center justify-center p-1"
      >
        <Icon size="100%" />
      </Typography>
      <Typography
        component="span"
        variant="title"
        size="large"
        className="text-sm lg:hidden lg:text-base group-[.nav-open]/layout:lg:block 2xl:block"
      >
        {title}
      </Typography>
    </Nav>
  );
};

NavIconItem.defaultProps = {
  isHover: true,
};

const NavComponent: React.FunctionComponent = () => {
  const {
    data: { session },
  } = useSession();

  const { asPath } = useRouter();

  const renderNavs = useMemo(
    () =>
      menuOptions.map(({ icon: Icon, title, href }) => (
        <NavIconItem key={title} href={href} Icon={Icon} title={title} active={href === asPath} />
      )),
    [asPath],
  );

  return (
    <>
      <div className="hidden h-full w-2/12 overflow-x-hidden border-r-4 border-brutal-black bg-brutal-surface p-4 transition-[width] lg:flex lg:w-28 lg:flex-col group-[.nav-open]/layout:lg:w-4/12 2xl:w-3/12 min-[1792px]:w-2/12">
        <div className="mx-auto flex h-full w-full flex-col sm:w-[4.5rem] group-[.nav-open]/layout:sm:w-full 2xl:w-full">
          <Typography
            component="div"
            variant="heading"
            size="large"
            className="text-shadow-neubrutalism relative h-16 self-center px-4 text-center tracking-widest text-brutal-primary"
            emphasis="full"
            emphasisColor="secondary"
          >
            <span className="sm:hidden group-[.nav-open]/layout:sm:block 2xl:block">Dashboard</span>
            <span className="sm:block group-[.nav-open]/layout:sm:hidden 2xl:hidden">D</span>
          </Typography>
          <nav className="mt-5 flex h-full w-full flex-col items-stretch gap-2">
            <div className="border-t-4 border-brutal-black" />
            {session && (
              <>
                <ul>
                  <NavItem>
                    <span className="relative aspect-square h-10 border-2 border-brutal-white shadow-neubrutalism shadow-brutal-white">
                      <Image
                        src={`${env.NEXT_PUBLIC_API_URL}/profile/${session.id}`}
                        alt={session.displayName}
                        layout="fill"
                      />
                    </span>
                    <div className="sm:hidden group-[.nav-open]/layout:sm:block 2xl:block">
                      <Typography component="h2" variant="title" size="large">
                        {session.displayName}
                      </Typography>
                      <Typography component="h2" variant="label" size="large">
                        {session.login}
                      </Typography>
                    </div>
                  </NavItem>
                </ul>
                <div className="border-t-4 border-brutal-black" />
              </>
            )}
            <ul>{renderNavs}</ul>
            <div className="mt-auto border-t-4 border-brutal-black" />
            <ul>
              <NavIconItem
                Icon={IoLogOutOutline}
                title="Logout"
                href="/logout"
                className="cursor-pointer text-brutal-red"
                isHover={false}
              />
            </ul>
          </nav>
        </div>
      </div>
      <div className="fixed inset-x-0 bottom-0 z-50 border-t-4 border-brutal-black bg-brutal-surface pb-4 pt-2 lg:hidden">
        <nav className="flex w-full flex-col gap-6">
          <ul className="flex justify-around">
            {menuOptions.map(({ icon: Icon, title, href }) => (
              <NavIconItem
                key={title}
                href={href}
                Icon={Icon}
                title={title}
                active={href === asPath}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
//#endregion

const Navigation = ({ children }: TDefaultLayoutProps) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string | string[]>('');
  const { toggleNavClass } = useNavbar();

  const handleToggleNav = () => {
    toggleNavClass();
  };

  useEffect(() => {
    if (!router.isReady) return;

    // Search not updating search value
    setSearchValue(router.query.s || '');
  }, [router, router.query.s]);

  return (
    <div className="flex h-screen w-full flex-row overflow-hidden">
      <NavComponent />
      <MainContainer>
        <Row className="fixed inset-x-0 top-0 z-50 h-[6.2rem] items-center border-b-4 border-b-brutal-black bg-brutal-surface px-4 transition-[left] lg:left-28 group-[.nav-open]/layout:lg:left-1/3 2xl:left-auto 2xl:w-9/12 min-[1792px]:w-10/12">
          <Typography
            component="div"
            variant="heading"
            size="large"
            className="col-span-1 hidden h-24 cursor-pointer p-4 lg:block group-[.nav-open]/layout:lg:col-span-2 2xl:hidden"
            onClick={handleToggleNav}
          >
            <IoMenuOutline size="100%" />
          </Typography>
          <div className="col-span-10 col-start-2 bg-inherit px-4 lg:col-span-6 lg:col-start-4">
            <TextField
              id="search"
              name="search"
              type="search"
              value={searchValue}
              variant="outlined"
              fullWidth
              placeholder="Search"
              iconActionButton={IoSearchOutline}
              onChange={event => setSearchValue(event.target.value)}
              onActionClick={event => {
                const { currentTarget } = event;

                const value = currentTarget.closest('label')?.querySelector('input')?.value;

                if (value && value !== '') {
                  router.query.s = value;
                  router.pathname = '/search';
                  router.push(router);
                }
              }}
              onKeyDown={event => {
                const { key, currentTarget } = event;

                if (key === 'Enter') {
                  router.query.s = currentTarget.value;
                  router.pathname = '/search';
                  router.push(router);
                }
              }}
            />
          </div>
        </Row>
        <div className="relative min-h-screen">{children}</div>
      </MainContainer>
    </div>
  );
};

export default Navigation;
