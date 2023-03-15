import App, { AppContext, AppInitialProps, AppProps } from 'next/app';

import { NextPageWithLayout } from '~@types/pages/_app';

import ContextProvider from '~@lib/context/index.context';

import '~@styles/globals.css';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  cookies?: string | undefined;
};

export default function MyApp({ Component, pageProps, cookies }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? (page => page);

  return (
    <ContextProvider cookies={cookies}>{getLayout(<Component {...pageProps} />)}</ContextProvider>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const data: AppInitialProps = await App.getInitialProps(appContext);

  const pageProps = {
    ...data,
    cookies: appContext.ctx.req?.headers.cookie,
  };

  return pageProps;
};
