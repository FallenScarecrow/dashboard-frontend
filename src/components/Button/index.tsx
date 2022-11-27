/* eslint-disable tailwindcss/no-custom-classname */
import React, { ButtonHTMLAttributes, FocusEvent, forwardRef } from 'react';
import clsx from 'clsx';

import { ThemeColors } from '~@types/_app';
import { ButtonVariants } from '~@types/Button';

import Ripple from '~@components/Ripple';

import styles from './style.module.css';
import Typography from '~@components/Typography';

interface IButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  color?: ThemeColors;
  icon: React.ReactNode;
  variant?: ButtonVariants;
}

interface IButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  color?: ThemeColors;
  icon?: React.ReactNode;
  children: React.ReactNode;
  variant?: ButtonVariants;
}

export type TButtonProps = IButtonIconProps | IButtonTextProps;

const Button = forwardRef<HTMLButtonElement, TButtonProps>((props, ref) => {
  const {
    fullWidth = false,
    color = 'primary',
    variant = 'text',
    children,
    icon,
    onClick: customHandleClick,
    disabled,
    className,
    ...rest
  } = props;

  const handleFocus = (e: FocusEvent<HTMLButtonElement>) => {
    const container = e.currentTarget;

    container.classList.toggle('focus');
  };

  return (
    <button
      className={clsx(
        'relative m-1 my-2 inline-flex h-10 min-w-[calc(100%-1rem)] cursor-pointer items-center justify-center overflow-hidden rounded-full px-6 text-center transition-colors sm:min-w-[9.25rem]',
        styles[`btn-${variant}-${color}`],
        !children && `h-8 w-8 rounded-full px-0 sm:min-w-0`,
        fullWidth && 'w-[calc(100%-1rem)]',
        className,
      )}
      onClick={customHandleClick}
      onBlur={handleFocus}
      onFocus={handleFocus}
      disabled={disabled}
      ref={ref}
      {...rest}
    >
      <Ripple disabled={disabled} />

      {icon ? (
        <Typography
          variant="heading"
          size="large"
          component="div"
          className={clsx(children && 'mr-2')}
        >
          {icon}
        </Typography>
      ) : null}

      {children ? (
        <Typography variant="label" size="large" component="span" className="inline">
          {children}
        </Typography>
      ) : null}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
