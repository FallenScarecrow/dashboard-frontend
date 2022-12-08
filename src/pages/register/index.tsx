import Head from 'next/head';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { IoKeyOutline, IoMailOutline, IoPersonOutline } from 'react-icons/io5';

import { NextPageWithLayout } from '~@types/_app';

import LoginLayout from '~@layouts/LoginLayout';

import { ANIMATION_TIMEOUT, MountAnimation } from '~@components/MountAnimation';
import Button from '~@components/Button';
import TextField from '~@components/TextField';
import Typography from '~@components/Typography';

const Register: NextPageWithLayout = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const idTimeout = setTimeout(() => {
      inputRef.current?.focus();
    }, ANIMATION_TIMEOUT);

    return () => {
      clearTimeout(idTimeout);
    };
  }, []);

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setData(prev => ({ ...prev, [target.id]: target.value }));
  };

  return (
    <>
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MountAnimation>
        <div className="flex h-full w-full flex-col items-center">
          <Typography variant="display" size="medium" component="h2" className="mb-4">
            Create Account
          </Typography>
          <div className="flex w-full flex-col items-center">
            <div className="flex h-64 w-64 items-center justify-center border-2 border-neutral-900 transition-colors duration-500 dark:border-neutral-100 sm:rounded-full">
              <IoPersonOutline size={128} />
            </div>
            <TextField
              ref={inputRef}
              id="username"
              name="username"
              type="text"
              icon={IoPersonOutline}
              value={data.email}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Username"
              autoComplete="username"
            />
            <TextField
              id="email"
              name="email"
              type="text"
              icon={IoMailOutline}
              value={data.email}
              required
              onChange={handleChange}
              fullWidth
              placeholder="E-mail"
              autoComplete="email"
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
              placeholder="Password"
              autoComplete="new-password"
            />
            <Button type="button" variant="contained" className="self-end">
              Sign-Up
            </Button>
          </div>
          <Typography variant="body" size="small" component="span" className="mt-auto">
            Already have an account? &nbsp;
            <Link href="/login" passHref legacyBehavior>
              <a className="hover:underline">Sign-In</a>
            </Link>
          </Typography>
        </div>
      </MountAnimation>
    </>
  );
};

export default Register;
Register.getLayout = page => {
  return <LoginLayout>{page}</LoginLayout>;
};
