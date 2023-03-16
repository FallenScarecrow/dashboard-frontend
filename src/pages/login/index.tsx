import Head from 'next/head';
import Link from 'next/link';

import { ChangeEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { IoKeyOutline, IoPersonOutline } from 'react-icons/io5';

import { TNextPageWithLayout } from '~@types/_app';
import { ILoginProps } from '~@types/pages/login';

import { providers } from '~@data/providers';

import LoginLayout from '~@layouts/LoginLayout';

import { ANIMATION_TIMEOUT, MountAnimation } from '~@components/MountAnimation';
import Button from '~@components/Button';
import TextField from '~@components/TextField';
import Typography from '~@components/Typography';
import PasswordField from '~@components/PasswordField';
import Providers from '~@components/Providers';

const SignIn: TNextPageWithLayout<ILoginProps> = ({ providers }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

  const [data, setData] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      inputRef.current?.focus();
    }, ANIMATION_TIMEOUT);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setData(prev => ({ ...prev, [target.id]: target.value }));
  };

  return (
    <>
      <Head>
        <title>Log in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MountAnimation nodeRef={nodeRef} timeout={50000}>
        <div ref={nodeRef} className="h-full w-full">
          <Typography
            variant="display"
            size="medium"
            component="h2"
            className="relative w-max before:absolute before:-inset-1 before:top-1/2 before:left-1/2 before:block before:skew-y-1 before:bg-brutal-seafoam"
          >
            <span className="relative">Log in</span>
          </Typography>
          <Typography variant="body" size="small" component="span" className="my-4">
            New to Dashboard? &nbsp;
            <Link href="/register" passHref legacyBehavior>
              <a
                className={clsx(
                  'underline',
                  'relative before:absolute before:-inset-1 before:block before:skew-y-3 before:bg-brutal-seafoam',
                )}
              >
                <span className="relative">Sign Up</span>
              </a>
            </Link>
          </Typography>
          <form>
            <TextField
              ref={inputRef}
              id="username"
              name="username"
              type="text"
              icon={IoPersonOutline}
              value={data.username}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Username / Email"
              autoComplete="username"
            />
            <PasswordField
              id="password"
              name="password"
              type="password"
              icon={IoKeyOutline}
              color="primary"
              value={data.password}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Password"
              autoComplete="current-password"
            />
            <Button type="button" variant="contained" className="self-end" fullWidth>
              Login
            </Button>
            <Link href="/register" passHref legacyBehavior>
              <Typography
                variant="body"
                size="small"
                component="a"
                className={clsx(
                  'z-10 my-4 w-max underline',
                  'relative before:absolute before:-inset-1 before:block before:skew-y-3 before:bg-brutal-seafoam',
                )}
              >
                <span className="relative">Forgot your password?</span>
              </Typography>
            </Link>
          </form>
          <div className="relative my-4 flex justify-center overflow-hidden">
            <Typography
              component="span"
              size="large"
              variant="body"
              className={clsx(
                'inline-block px-5 align-baseline',
                'before:absolute before:top-3 before:right-0 before:left-2/3 before:block before:border-t-2 before:border-neutral-900/20',
                'after:absolute after:left-0 after:right-2/3 after:top-3 after:block after:border-t-2 after:border-neutral-900/20',
              )}
            >
              or
            </Typography>
          </div>
          <Providers providers={providers} />
        </div>
      </MountAnimation>
    </>
  );
};

export default SignIn;
SignIn.getLayout = page => {
  return <LoginLayout>{page}</LoginLayout>;
};

export async function getServerSideProps() {
  return {
    props: {
      providers,
    },
  };
}
