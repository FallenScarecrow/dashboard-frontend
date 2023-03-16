import { ChangeEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import Head from 'next/head';
import Link from 'next/link';

import { IoKeyOutline, IoMailOutline, IoPersonOutline } from 'react-icons/io5';

import { TNextPageWithLayout } from '~@types/_app';
import { IRegisterProps } from '~@types/pages/register';

import { providers } from '~@data/providers';

import LoginLayout from '~@layouts/LoginLayout';

import { ANIMATION_TIMEOUT, MountAnimation } from '~@components/MountAnimation';
import Button from '~@components/Button';
import TextField from '~@components/TextField';
import Typography from '~@components/Typography';
import Providers from '~@components/Providers';

const Register: TNextPageWithLayout<IRegisterProps> = ({ providers }) => {
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
    confirmEmail: '',
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
              id="confirm-email"
              name="confirm-email"
              type="text"
              icon={IoMailOutline}
              value={data.confirmEmail}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Confirm Email"
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
            <TextField
              id="confirm-password"
              name="confirm-password"
              type="password"
              icon={IoKeyOutline}
              color="primary"
              value={data.password}
              required
              onChange={handleChange}
              fullWidth
              placeholder="Confirm Password"
              autoComplete="new-password"
            />
            <Button type="button" variant="contained" className="self-end" fullWidth>
              Sign-Up
            </Button>
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
          <Typography
            variant="body"
            size="small"
            component="div"
            className="mt-8 w-full text-center"
          >
            Already have an account? &nbsp;
            <Link href="/login" passHref legacyBehavior>
              <a className="text-cyan-600 underline">Sign-In</a>
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

export async function getServerSideProps() {
  return {
    props: {
      providers,
    },
  };
}

// const Providers = () => {
//   return (
//     <div className="flex w-full flex-wrap justify-around gap-4">
//       {images.map(image => (
//         <button
//           // onClick={() => signIn(provider.id)}
//           // Redirect to Github Login page
//           // Then github comes back and send data to backend
//           key={image.id}
//           className={clsx(
//             'relative aspect-square overflow-hidden rounded-md p-4 backdrop-blur-sm transition-colors duration-500 sm:rounded-xl',
//             'bg-neutral-900/10',
//             'shadow-md shadow-neutral-100/10',
//           )}
//         >
//           <div className="relative h-12 w-12">
//             <Image alt={'Log with ' + image.id} src={image.src} layout="fill" objectFit="contain" />
//           </div>
//         </button>
//       ))}
//     </div>
//   );
// };
