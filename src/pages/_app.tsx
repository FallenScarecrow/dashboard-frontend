import App, { AppInitialProps } from 'next/app';

import { App as _App } from '~@types/_app';
import ContextProvider from '~@lib/context/index.context';
import '~@styles/globals.css';

import { Navigation } from '~@layouts';
import withHOCDefault from '~@lib/hoc';

export default function MyApp({ Component, pageProps, cookies }: _App.TAppPropsWithLayout) {
  const HOCComponent = withHOCDefault(Component);
  const getLayout = Component.getLayout || (page => <Navigation>{page}</Navigation>);

  return (
    <ContextProvider cookies={cookies}>
      {getLayout(<HOCComponent {...pageProps} />)}
    </ContextProvider>
  );
}

MyApp.getInitialProps = async (appContext: _App.TAppContextWithLayout) => {
  const data: AppInitialProps = await App.getInitialProps(appContext);

  const pageProps = {
    ...data,
    cookies: appContext.ctx.req?.headers.cookie,
  };

  return pageProps;
};
