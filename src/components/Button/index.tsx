import React, { FocusEvent, forwardRef } from 'react';
import clsx from 'clsx';

import { TButtonProps } from '~@types/components/Button';

import Ripple from '~@components/Ripple';
import Typography from '~@components/Typography';

import styles from './style.module.css';

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
        'relative inline-flex min-w-[calc(100%-1rem)] cursor-pointer items-center justify-center overflow-hidden text-center transition-colors',
        !children ? `h-9 w-9 px-0 sm:min-w-0` : 'h-10 px-6 sm:min-w-[9.25rem]',
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
          className={clsx(children ? 'mr-2' : className)}
        >
          <Icon />
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
