import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { SessionProvider } from 'next-auth/react';

import { ToastProvider } from '~@lib/ToastProvider';

import { NextPageWithLayout } from '~@types/_app';

import '~@styles/globals.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <SessionProvider session={session}>
      <ThemeProvider enableSystem={true} attribute="class">
        <ToastProvider>{getLayout(<Component {...pageProps} />)}</ToastProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
