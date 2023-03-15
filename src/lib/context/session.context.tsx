import React, { createContext, useContext, useCallback, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

interface ISessionContextData {
  session: ISession;

  /**
   * @function saveSession
   * Save Session in Local Storage
   * @param session Session in JSON format
   */
  saveSession(session: ISession): void;

  /**
   * @function clearSession
   * Remove Session from Local Storage
   */
  clearSession(): void;
}

export interface ISession {
  authToken: string;
  displayName: string;
  id: string;
  login: string;
  roles: string[];
}

const SessionContext = createContext({} as ISessionContextData);

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie, removeCookie] = useCookies(['session']);
  const [session, setSession] = useState(cookies.session);

  useEffect(() => setSession(cookies.session), [cookies.session]);

  const saveSession = useCallback(
    (session: ISession) => {
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
