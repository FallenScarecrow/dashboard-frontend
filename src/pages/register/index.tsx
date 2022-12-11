import Head from 'next/head';
import { BuiltInProviderType } from 'next-auth/providers';
import { ClientSafeProvider, getProviders, LiteralUnion, signIn } from 'next-auth/react';

import { ChangeEvent, useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { IoKeyOutline, IoMailOutline, IoPersonOutline } from 'react-icons/io5';

import { NextPageWithLayout } from '~@types/_app';

import LoginLayout from '~@layouts/LoginLayout';

import { ANIMATION_TIMEOUT, MountAnimation } from '~@components/MountAnimation';
import Button from '~@components/Button';
import TextField from '~@components/TextField';
import Typography from '~@components/Typography';
import Image from 'next/image';
import clsx from 'clsx';

interface IRegisterProps {
  providers: Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider> | null;
}

const images: { [x in LiteralUnion<BuiltInProviderType, string>]?: string } = {
  discord:
    'https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white',
  facebook:
    'https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white',
  github:
    'https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white',
};

const Register: NextPageWithLayout<IRegisterProps> = ({ providers }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const nodeRef = useRef<HTMLDivElement>(null);

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
      <MountAnimation nodeRef={nodeRef}>
        <div ref={nodeRef} className="h-full w-full">
          <Typography variant="display" size="medium" component="h2" className="mb-4">
            Create Account
          </Typography>
          <form>
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
            <Button type="button" variant="contained" className="self-end" fullWidth>
              Sign-Up
            </Button>
          </form>
          {Object.values(providers || []).length > 0 ? (
            <>
              <div className="relative my-4 flex justify-center overflow-hidden">
                <Typography
                  component="span"
                  size="large"
                  variant="body"
                  className={clsx(
                    'inline-block px-5 align-baseline',
                    'before:absolute before:top-3 before:right-0 before:left-2/3 before:block before:border-t-2 before:border-neutral-900/20 dark:before:border-neutral-100/20',
                    'after:absolute after:left-0 after:right-2/3 after:top-3 after:block after:border-t-2 after:border-neutral-900/20 dark:after:border-neutral-100/20',
                  )}
                >
                  or
                </Typography>
              </div>
              <div className="flex w-full flex-wrap justify-center gap-4">
                {Object.values(providers || []).map(provider =>
                  (images[provider.id] || '').length > 0 ? (
                    <div key={provider.name}>
                      <button
                        onClick={() => signIn(provider.id)}
                        className="relative h-10 w-40 overflow-hidden rounded-md shadow-md"
                      >
                        <Image
                          alt="Log in Discord"
                          src={images[provider.id] || ''}
                          width={104.75}
                          height={28}
                          layout="fill"
                        />
                      </button>
                    </div>
                  ) : null,
                )}
              </div>
            </>
          ) : null}
          <Typography
            variant="body"
            size="small"
            component="div"
            className="mt-8 w-full text-center"
          >
            Already have an account? &nbsp;
            <Link href="/login" passHref legacyBehavior>
              <a className="text-cyan-600 underline dark:text-cyan-400">Sign-In</a>
            </Link>
          </Typography>
        </div>
      </MountAnimation>
    </>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}

export default Register;
Register.getLayout = page => {
  return <LoginLayout>{page}</LoginLayout>;
};
