import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

export type ThemeColors = 'primary' | 'secondary';
export type ThemeStatus = 'error' | 'warning' | 'info' | 'success';
export type TextVariants = 'display' | 'heading' | 'title' | 'body' | 'label';
export type Sizes = 'large' | 'medium' | 'small';
