import { ReactElement, useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { ImSpinner10 } from 'react-icons/im';

import publicPaths from '../../data/publicPaths';
import { useSession } from '../../lib/context/session.context';

const RouteGuard: React.FunctionComponent<{ children: ReactElement }> = (props: {
  children: ReactElement;
}) => {
  const { children } = props;

  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  const { session: sessionData } = useSession();

  useEffect(() => {
    const authCheck = () => {
      if (sessionData && !publicPaths.includes(router.asPath.split('?')[0])) {
        setAuthorized(false);
        router.push({
          pathname: '/login',
          query: {
            goto: router.asPath,
          },
        });
      } else {
        setAuthorized(true);
      }
    };

    authCheck();

    const preventAccess = () => setAuthorized(false);

    router.events.on('routeChangeStart', preventAccess);
    router.events.on('routeChangeComplete', authCheck);

    return () => {
      router.events.off('routeChangeStart', preventAccess);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, [router, router.events, sessionData]);

  if (!authorized) {
    return children;
  }

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <ImSpinner10 className="animate-spin text-9xl" />
    </div>
  );
};

export default RouteGuard;
