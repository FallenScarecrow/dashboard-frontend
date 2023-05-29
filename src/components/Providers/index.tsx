import Image from 'next/image';

import { TProvidersProps } from '~@types/components/Providers';

const Providers = ({ providers }: TProvidersProps) => {
  if (!providers.length) return <span>Loading...</span>;

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
          className="relative aspect-square overflow-hidden border-4 border-brutal-black bg-brutal-primary p-4 shadow-none shadow-transparent backdrop-blur-sm transition-all duration-500 hover:bg-brutal-secondary hover:shadow-neubrutalism hover:shadow-brutal-black"
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
