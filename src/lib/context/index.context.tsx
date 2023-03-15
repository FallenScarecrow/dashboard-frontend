import { ReactNode } from 'react';

import { SessionProvider } from './session.context';
import { ToastProvider } from './toast.context';
import { Cookies, CookiesProvider } from 'react-cookie';

export default function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies?: string | undefined;
}) {
  const isBrowser = typeof window !== 'undefined';

  return (
    // <ThemeProvider enableSystem={true} attribute="class">
    <CookiesProvider cookies={isBrowser ? undefined : new Cookies(cookies)}>
      <SessionProvider>
        <ToastProvider>{children}</ToastProvider>
      </SessionProvider>
    </CookiesProvider>
    // </ThemeProvider>
  );
}
