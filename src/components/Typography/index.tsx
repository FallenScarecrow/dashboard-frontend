import clsx from 'clsx';
import React, { ComponentType, forwardRef, ReactNode } from 'react';

import { ThemeColors } from '~@types/pages/_app';

import styles from './styles.module.css';

interface ITypographyProps extends React.HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  component:
    | ComponentType
    | 'li'
    | 'span'
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'a';
  variant: TTextVariant;
  size: TTextSize;
  color?: ThemeColors;
}

type TTextVariant = 'display' | 'heading' | 'title' | 'body' | 'label';
type TTextSize = 'large' | 'medium' | 'small';

const defaultClassesMapping: Record<string, Record<string, string>> = {
  display: {
    large: 'text-6xl font-normal tracking-[0] leading-[64px]',
    medium: 'text-5xl font-normal tracking-[0] leading-[52px]',
    small: 'text-4xl font-normal tracking-[0] leading-[44px]',
  },
  heading: {
    large: 'text-3xl font-normal tracking-[0] leading-10',
    medium: 'text-2xl font-normal tracking-[0] leading-9',
    small: 'text-xl font-normal tracking-[0] leading-8',
  },
  title: {
    large: 'text-lg font-normal tracking-[0] leading-7',
    medium: 'text-base font-medium tracking-[.15] leading-6',
    small: 'text-sm font-medium tracking-[.1] leading-5',
  },
  body: {
    large: 'text-base font-normal tracking-[.5] leading-6',
    medium: 'text-sm font-normal tracking-[.25] leading-5',
    small: 'text-xs font-normal tracking-[.4] leading-4',
  },
  label: {
    large: 'text-sm font-medium tracking-widest leading-5',
    medium: 'text-xs font-medium tracking-[.5] leading-4',
    small: 'text-[11px] font-medium tracking-[.5] leading-4',
  },
};

const Typography = forwardRef((props: ITypographyProps, ref) => {
  const { children, variant, component, size, color, className, ...rest } = props;

  const Component = component as React.ElementType;

  return (
    <Component
      ref={ref}
      className={clsx(
        'block align-middle font-sans text-brutal-black antialiased',
        defaultClassesMapping[variant][size],
        color && styles[`heading-${color}`],
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  );
});

Typography.displayName = 'Typography';

export default Typography;
