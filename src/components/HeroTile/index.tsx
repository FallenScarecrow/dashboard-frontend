/* eslint-disable tailwindcss/classnames-order */
/* eslint-disable tailwindcss/no-custom-classname */
import Image from 'next/image';
import clsx from 'clsx';

import { App } from '~@types/_app';

import Typography from '~@components/Typography';

import styles from './styles.module.css';
import withTMDBImage from '~@lib/HoC/withTMDBImage';

type THeroTileProps = {
  title: string;
  description?: string;
  color?: App.TThemeColors;
  poster?: string;
  backdrop?: string;
};

const HeroTile = ({
  title,
  description,
  color = 'primary',
  poster = '',
  backdrop = '',
}: THeroTileProps) => {
  const TMDBImage = withTMDBImage(Image);

  return (
    <div
      className={clsx(
        'relative h-screen w-full shrink-0 overflow-x-hidden',
        styles[`HeroTile-${color}`],
      )}
    >
      {(color || poster || backdrop) && (
        <div
          className={clsx(
            'absolute inset-0',
            'after:absolute after:inset-0',
            !poster && !backdrop && styles['not-background'],
          )}
        >
          {backdrop && (
            <TMDBImage
              src={backdrop}
              alt={title}
              fill
              loading="eager"
              className={clsx('object-cover xl:block', poster ? 'hidden' : 'block')}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${backdrop}`}
            />
          )}
          {poster && (
            <TMDBImage
              src={poster}
              alt={title}
              fill
              loading="eager"
              className={clsx('block object-cover', backdrop && 'xl:hidden')}
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${poster}`}
            />
          )}
        </div>
      )}
      <div className="relative mx-auto flex h-full w-10/12 flex-col items-center justify-center">
        <div className="h-20"></div>
        {poster && (
          <div className={styles['HeroTile-poster']}>
            <TMDBImage
              src={poster}
              alt={title}
              fill
              loading="eager"
              className="block object-cover"
              placeholder="blur"
              blurDataURL={`https://image.tmdb.org/t/p/w92/${poster}`}
            />
          </div>
        )}
        <Typography
          component="h2"
          variant="display"
          size="small"
          className="drop-shadow-neubrutalism my-4 hidden text-center sm:block sm:text-5xl lg:text-4xl xl:text-5xl"
        >
          {title}
        </Typography>
        {description ? (
          <Typography
            component="span"
            variant="title"
            size="medium"
            className="drop-shadow-neubrutalism mt-4 w-full overflow-hidden text-ellipsis text-justify text-white sm:w-2/3"
            style={{
              display: '-webkit-box',
              lineClamp: 6,
              WebkitLineClamp: 6,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </Typography>
        ) : null}
      </div>
    </div>
  );
};

export default HeroTile;
