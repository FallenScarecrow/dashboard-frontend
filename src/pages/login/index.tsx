import Head from 'next/head';
import Link from 'next/link';

import { useRef } from 'react';
import clsx from 'clsx';

import { App } from '~@types/_app';
import { ILoginProps } from '~@types/pages/login';

import { providers } from '~@data/providers';

import { Login } from '~@layouts';

import { MountAnimation } from '~@components/MountAnimation';
import Typography from '~@components/Typography';
import Providers from '~@components/Providers';
import Form from '~@components/Form';
import loginFields from '~@data/fields/loginFields';

const SignIn: App.TNextPageWithLayout<ILoginProps> = ({ providers }) => {
  const nodeRef = useRef<HTMLDivElement>(null);

  const handleSubmit = () => {
    // Perform for submission
  };

  return (
    <>
      <Head>
        <title>Log in</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MountAnimation nodeRef={nodeRef}>
        <div ref={nodeRef} className="w-full bg-inherit pb-8">
          <Typography component="h2" variant="display" size="large" emphasis="normal">
            Log in
          </Typography>
          <div className="flex items-center gap-2">
            <Typography component="div" variant="body" size="small" className="my-4">
              New to Dashboard?
            </Typography>
              <Typography
              component={Link}
              href="/register"
                variant="body"
                size="small"
                className="my-4 underline"
                emphasis="full"
              >
                Sign Up
              </Typography>
          </div>

          <Form
            fields={loginFields}
            submitProps={{
              children: 'Login',
              fullWidth: true,
            }}
            onSubmit={handleSubmit}
          />

            <Typography
            component={Link}
            href="/register"
              variant="body"
              size="small"
              emphasis="full"
              className="z-10 my-4 w-max underline"
            >
              Forgot your password?
            </Typography>
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
SignIn.getLayout = page => <Login>{page}</Login>;

export async function getServerSideProps() {
  return {
    props: {
      providers,
    },
  };
}
