import App, { AppContext, AppInitialProps } from 'next/app';

import { TAppPropsWithLayout } from '~@types/_app';

import ContextProvider from '~@lib/context/index.context';

import '~@styles/globals.css';

export default function MyApp({ Component, pageProps, cookies }: TAppPropsWithLayout) {
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
