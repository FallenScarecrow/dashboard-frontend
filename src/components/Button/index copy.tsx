import React, { ButtonHTMLAttributes, FocusEvent, forwardRef } from 'react';
import clsx from 'clsx';

import { ThemeColors } from '~@types/pages/_app';
import { ButtonVariants } from '~@types/Button';

import Ripple from '~@components/Ripple';

import styles from './style.module.css';
import Typography from '~@components/Typography';
import { IconType } from 'react-icons/lib';

interface IButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  color?: ThemeColors;
  icon: IconType;
  variant?: ButtonVariants;
}

interface IButtonTextProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean;
  color?: ThemeColors;
  icon?: IconType;
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
    icon: Icon,
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
        'relative m-1 my-2 inline-flex min-w-[calc(100%-1rem)] cursor-pointer items-center justify-center overflow-hidden rounded-full text-center transition-colors',
        !children ? `h-8 w-8 rounded-full px-0 sm:min-w-0` : 'h-10 px-6 sm:min-w-[9.25rem]',
        styles[`btn-${variant}-${color}`],
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

      {Icon ? (
        <Typography
          variant="heading"
          size="large"
          component="div"
          className={clsx(children && 'mr-2')}
        >
          <Icon className="text-white" />
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
