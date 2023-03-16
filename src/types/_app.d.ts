import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { IconType } from 'react-icons/lib';

import { TProvider } from '~@types/_api';

type TNextPageWithLayout<TP = object, TIP = TP> = NextPage<TP, TIP> & {
  getLayout: (page: ReactElement) => ReactNode;
};

type TAppPropsWithLayout = AppProps & {
  Component: TNextPageWithLayout;
  cookies?: string | undefined;
};

type TThemeColors = 'primary' | 'secondary';
type TStatus = 'error' | 'warning' | 'info' | 'success';
type TTextVariants = 'display' | 'heading' | 'title' | 'body' | 'label';
type TSizes = 'large' | 'medium' | 'small';

type TIcons = { [x in TStatus]: IconType };

type TProviders = TProvider[];

export {
  TNextPageWithLayout,
  TAppPropsWithLayout,
  TThemeColors,
  TStatus,
  TTextVariants,
  TSizes,
  TIcons,
  TProviders,
};
