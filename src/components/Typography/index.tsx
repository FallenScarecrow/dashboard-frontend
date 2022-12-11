import clsx from 'clsx';
import React, { ComponentType, ReactNode } from 'react';

import { ThemeColors } from '~@types/_app';

import styles from './styles.module.css';

interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  component: ComponentType | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'a';
  variant: 'display' | 'title' | 'heading' | 'body' | 'label';
  size: 'large' | 'medium' | 'small';
  color?: ThemeColors;
}

const Typography = (props: ITypographyProps) => {
  const {
    children,
    variant,
    component: Component = 'span',
    size,
    color,
    className,
    ...rest
  } = props;

  let textSize = '';

  switch (variant) {
    case 'display':
      if ('large' == size) textSize = 'text-6xl font-normal tracking-[0] leading-[64px]';
      if ('medium' == size) textSize = 'text-5xl font-normal tracking-[0] leading-[52px]';
      if ('small' == size) textSize = 'text-4xl font-normal tracking-[0] leading-[44px]';
      break;
    case 'heading':
      if ('large' == size) textSize = 'text-3xl font-normal tracking-[0] leading-10';
      if ('medium' == size) textSize = 'text-2xl font-normal tracking-[0] leading-9';
      if ('small' == size) textSize = 'text-xl font-normal tracking-[0] leading-8';
      break;
    case 'title':
      if ('large' == size) textSize = 'text-lg font-normal tracking-[0] leading-7';
      if ('medium' == size) textSize = 'text-base font-medium tracking-[.15] leading-6';
      if ('small' == size) textSize = 'text-sm font-medium tracking-[.1] leading-5';
      break;
    case 'body':
      if ('large' == size) textSize = 'text-base font-normal tracking-[.5] leading-6';
      if ('medium' == size) textSize = 'text-sm font-normal tracking-[.25] leading-5';
      if ('small' == size) textSize = 'text-xs font-normal tracking-[.4] leading-4';
      break;
    case 'label':
      if ('large' == size) textSize = 'text-sm font-medium tracking-widest leading-5';
      if ('medium' == size) textSize = 'text-xs font-medium tracking-[.5] leading-4';
      if ('small' == size) textSize = 'text-[11px] font-medium tracking-[.5] leading-4';
      break;
  }

  return (
    <Component
      className={clsx(
        'block align-middle font-sans text-black antialiased dark:text-white',
        textSize,
        color && styles[`heading-${color}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Typography;
