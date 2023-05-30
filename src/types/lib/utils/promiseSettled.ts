type PromiseSettledReturn<K> = K;

type PromiseSettledProps<K> = K;

export async function promiseSettled<K extends object>(
  datas: PromiseSettledProps<K>,
): Promise<PromiseSettledReturn<K>> {
  // Taking off the keys for further re-assign
  const keys = Object.keys(datas);
  // Taking off the values to make the promises's array
  const values = Object.values(datas);

  const results = await Promise.allSettled<K>(values).then(promise =>
    promise.reduce((acc, result, i) => {
      // Not adding the 'rejected' returns (? Must show 'Not Found')
      if (result.status == 'fulfilled') {
        return { ...acc, [keys[i]]: result.value };
      }
      return acc;
    }, {} as K),
  );

  return results;
}
