import React from 'react';
import { ImageLoader, ImageProps } from 'next/image';

function withTMDBImage<T extends ImageProps>(WrappedComponent: React.ComponentType<T>) {
  const imageLoader: ImageLoader = ({ src }) => {
    return `https://image.tmdb.org/t/p/original/${src}`;
  };

  const TMDBImage = (props: T) => {
    return <WrappedComponent {...props} loader={imageLoader} />;
  };

  return TMDBImage;
}

export default withTMDBImage;
