import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

import {
  TSession,
  TSessionContextData,
  TSessionProviderProps,
} from '~@types/lib/context/session.context';

const SessionContext = createContext({} as TSessionContextData);

const SessionProvider = ({ children }: TSessionProviderProps) => {
  const [cookies, setCookie, removeCookie] = useCookies(['session']);
  const [session, setSession] = useState(cookies.session);

  useEffect(() => setSession(cookies.session), [cookies.session]);

  const saveSession = useCallback(
    (session: TSession) => {
      setCookie('session', session, {
        domain: process.env.COOKIE_DOMAIN,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'none',
        httpOnly: false,
        path: '/',
      });
    },
    [setCookie],
  );

  const clearSession = useCallback(() => {
    removeCookie('session');
  }, [removeCookie]);

  return (
    <SessionContext.Provider value={{ session, saveSession, clearSession }}>
      {children}
    </SessionContext.Provider>
  );
};

function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be used within a SessionProvider');
  }

  return context;
}

export { SessionProvider, useSession };
