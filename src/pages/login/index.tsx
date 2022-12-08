import Head from 'next/head';
import Link from 'next/link';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { IoKeyOutline, IoPersonOutline } from 'react-icons/io5';

import { NextPageWithLayout } from '~@types/_app';

import LoginLayout from '~@layouts/LoginLayout';

import { ANIMATION_TIMEOUT, MountAnimation } from '~@components/MountAnimation';
import Button from '~@components/Button';
import TextField from '~@components/TextField';
import Typography from '~@components/Typography';

const Login: NextPageWithLayout = () => {
  const inputRef = useRef<HTMLInputElement>(null);

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
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MountAnimation>
        <div className="flex h-full w-full flex-col items-center justify-between">
          <Typography variant="display" size="medium" component="h2">
            Login
          </Typography>
          <div className="flex w-full flex-col">
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
              placeholder="Username / E-mail"
              autoComplete="username"
            />
            <TextField
              id="password"
              name="password"
              type="password"
              icon={IoKeyOutline}
              color="primary"
              value={data.password}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Senha"
              autoComplete="current-password"
            />
            <Button type="button" variant="contained" className="self-end">
              Login
            </Button>
          </div>
          <Typography variant="body" size="small" component="span">
            Don&apos;t have an account? &nbsp;
            <Link href="/register" passHref legacyBehavior>
              <a className="hover:underline">Sign-Up</a>
            </Link>
          </Typography>
        </div>
      </MountAnimation>
    </>
  );
};

export default Login;
Login.getLayout = page => {
  return <LoginLayout>{page}</LoginLayout>;
};
