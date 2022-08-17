import Head from 'next/head';
import { ReactElement } from 'react';
import { SimpleLayout } from '../components/Layout';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginForm />
    </>
  );
};

export default Login;
Login.getLayout = (page: ReactElement) => {
  return <SimpleLayout>{page}</SimpleLayout>;
};
