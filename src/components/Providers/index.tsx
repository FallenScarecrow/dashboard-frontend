import clsx from 'clsx';
import Image from 'next/image';

import { env } from '~@env/client.mjs';

type TProviderId = 'google' | 'github' | 'discord';
interface IProvider {
  id: TProviderId;
  src: string;
  callback?: string;
}

const Providers = ({ providers }) => {
  if (!providers?.length) return <span>Loading...</span>;

  const handleClick = (callback?: string) => {
    if (!callback) return;

    window.location.assign(callback);
  };

  return (
    <div className="flex w-full flex-wrap justify-around gap-4">
      {providers.map(provider => (
        <button
          key={provider.id}
          onClick={() => handleClick(provider.callback)}
          className={clsx(
            'relative aspect-square overflow-hidden rounded-md p-4 backdrop-blur-sm transition-all duration-500 sm:rounded-xl',
            'border-2 border-transparent bg-brutal-black shadow-none shadow-transparent',
            'hover:-translate-x-1 hover:-translate-y-1 hover:border-brutal-black hover:bg-brutal-seafoam hover:shadow-neubrutalism hover:shadow-brutal-black',
          )}
        >
          <div className="relative h-12 w-12">
            <Image
              alt={'Log with ' + provider.id}
              src={provider.src}
              layout="fill"
              objectFit="contain"
            />
          </div>
        </button>
      ))}
    </div>
  );
};

export default Providers;
