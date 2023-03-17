import { env } from '~@env/client.mjs';

const abortApiController = new AbortController();

function getGithubSession(code: string) {
  return new Promise((resolve, reject) =>
    fetch(env.NEXT_PUBLIC_API_URL + 'code=' + code)
      .then(res => {
        resolve(res);

        if (res.status >= 400) {
          reject({ status: res.status, statusText: res.statusText });
          return;
        }
      })
      .catch(err => reject(err)),
  );
}

export { abortApiController, getGithubSession };
