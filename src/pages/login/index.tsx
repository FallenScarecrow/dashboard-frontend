import Head from 'next/head';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { IoKeyOutline, IoPersonOutline } from 'react-icons/io5';

import { NextPageWithLayout } from '~@types/_app';

import DefaultLayout from '~@layouts/CleanLayout';

import Button from '~@components/Button';
import TextField from '~@components/TextField';
import Typography from '~@components/Typography';

const Login: NextPageWithLayout = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    inputRef.current?.focus();
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
      <div className="flex h-screen w-full">
        <form className="flex h-full w-full max-w-2xl flex-col justify-center py-16 px-20">
          <Typography variant="display" size="medium" component="h2" className="mb-4">
            Login
          </Typography>
          <TextField
            ref={inputRef}
            id="email"
            name="email"
            type="text"
            value={data.email}
            placeholder="E-mail"
            icon={IoPersonOutline}
            fullWidth
            autoFocus
            onChange={handleChange}
          />
          <TextField
            id="password"
            name="password"
            type="password"
            value={data.password}
            placeholder="Senha"
            onChange={handleChange}
            icon={IoKeyOutline}
            color="primary"
            fullWidth
          />
          <Button type="button" variant="contained" className="self-end">
            Login
          </Button>
        </form>
        <div className="h-full flex-1 bg-[url('https://www.fillmurray.com/600/1000')] bg-gradient-to-br from-sky-500/20 to-purple-500/20 bg-cover bg-center bg-no-repeat" />
      </div>
    </>
  );
};

export default Login;
Login.getLayout = page => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
