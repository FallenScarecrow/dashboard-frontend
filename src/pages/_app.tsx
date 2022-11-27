import type { AppProps } from 'next/app';
import { NextPageWithLayout } from '../types/_app';

import '~@styles/globals.css';
import { ToastProvider } from 'lib/ToastProvider';
import { ThemeProvider } from 'next-themes';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ToastProvider>{getLayout(<Component {...pageProps} />)}</ToastProvider>
    </ThemeProvider>
  );
}

export default MyApp;
