/* eslint-disable react-hooks/exhaustive-deps */
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Clear } from '~@layouts';
import { getGithubSession, abortApiController } from '~@lib/api/githubSession';
import { useSession } from '~@lib/context/session.context';
import { TNextPageWithLayout } from '~@types/_app';

const useCallApi = ({ router }: { router: NextRouter }) => {
  const [prerenderCompleted, setPrerenderCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const { saveSession } = useSession();

  useEffect(() => {
    if (!prerenderCompleted) {
      return () => {
        setPrerenderCompleted(true);
      };
    }

    const code = router.query.code as string;

    (async () => {
      getGithubSession(code)
        .then(res => {
          setLoading(false);

          saveSession(res);

          setTimeout(() => {
            window.location.assign('/dashboard');
          }, 1500);
        })
        .catch(res => {
          setLoading(false);
          setHasError(true);
        });
    })();

    return () => {
      if (abortApiController) {
        setLoading(true);
        setHasError(false);
        abortApiController.abort();
      }
    };
  }, [prerenderCompleted, router]);

  return [loading, hasError];
};

const GithubCallback: TNextPageWithLayout = () => {
  const router = useRouter();

  const [loading, hasError] = useCallApi({ router });

  return (
    <div className="flex h-screen w-full items-center justify-center">
      {loading
        ? 'Loading Data...'
        : hasError
        ? 'Something went wront'
        : "Ur goin' redirect to dashboard"}
    </div>
  );
};

export default GithubCallback;
GithubCallback.getLayout = page => <Clear>{page}</Clear>;
