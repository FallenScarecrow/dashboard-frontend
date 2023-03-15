import {
  ChangeEvent,
  FocusEvent,
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from 'react';
import clsx from 'clsx';
import { IconType } from 'react-icons/lib';

import { ThemeColors } from '~@types/pages/_app';

import Typography from '~@components/Typography';

import styles from './styles.module.css';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: 'email' | 'text' | 'password' | 'search' | 'url' | 'tel' | HTMLInputTypeAttribute;
  placeholder: string;
  fullWidth?: boolean;
  color?: ThemeColors;
  icon?: IconType;
  iconActionButton?: IconType;
  onActionClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TextField = forwardRef<HTMLInputElement, IInputProps>((props: IInputProps, ref) => {
  const {
    fullWidth = false,
    color = 'primary',
    placeholder,
    value,
    onChange: customHandleChange,
    iconActionButton: IconActionButton,
    id,
    disabled,
    icon: Icon,
    onActionClick: handleActionClick,
    type,
    ...rest
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      currentTarget: { parentElement: container, value },
    } = e;

    if (!container) {
      return;
    }

    container.classList.remove('valid');

    if (!container.classList.contains('') && value !== '') {
      container.classList.add('valid');
    }

    customHandleChange && customHandleChange(e);
  };

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    const container = e.currentTarget.parentElement;

    if (!container) {
      return;
    }
  };

  return (
    <label
      htmlFor={id}
      className={clsx(
        'group relative m-1 my-4 inline-block h-12 w-full',
        fullWidth ? 'max-w-[calc(100%-0.5rem)]' : 'max-w-xs',
        disabled ? 'cursor-not-allowed select-none' : 'cursor-text',
        value && 'valid',
      )}
    >
      <input
        id={id}
        ref={ref}
        type={type}
        defaultValue={value}
        onBlur={handleFocus}
        onFocus={handleFocus}
        onChange={handleChange}
        className={clsx(
          'peer absolute left-0 bottom-0 m-0 h-px w-full rounded-t-xl border-0 text-base outline-none transition-[height,padding] duration-500',
          'focus:h-5/6',
          'group-[.valid]:h-5/6',
          'disabled:cursor-not-allowed disabled:select-none',
          styles[`textField-${color}`],
          Icon ? 'pl-10' : 'focus:pl-4 group-[.valid]:pl-4',
          IconActionButton ? 'pr-10' : 'focus:pr-4 group-[.valid]:pr-4',
        )}
        disabled={disabled}
        {...rest}
      />
      {Icon ? (
        <div
          className={clsx(
            'absolute top-1/2 -translate-y-1/3 px-2 text-2xl transition-colors duration-500',
            'peer-focus:text-neutral-900',
            'group-[.valid]:text-neutral-900',
            'peer-disabled:select-none peer-disabled:text-opacity-40',
          )}
        >
          <Icon />
        </div>
      ) : null}
      <Typography
        component="span"
        size="large"
        variant="label"
        className={clsx(
          'absolute top-1/2 left-4 -translate-y-1/3 px-1 capitalize text-neutral-900 transition-[top,font-size,left,color] duration-500',
          'peer-focus:-top-2 peer-focus:left-0 peer-focus:text-xs',
          'group-[.valid]:-top-2 group-[.valid]:left-0 group-[.valid]:text-xs',
          'peer-disabled:select-none peer-disabled:text-opacity-40',
          Icon ? 'left-9' : 'left-4',
        )}
      >
        {placeholder}
      </Typography>
      {IconActionButton ? (
        <button
          type="button"
          className={clsx(
            'absolute top-1/2 right-1 z-10 -translate-y-1/3 rounded-full p-1 text-2xl outline-none',
            'peer-focus:text-neutral-900',
            'group-[.valid]:text-neutral-900',
            'peer-disabled:select-none peer-disabled:text-opacity-40',
          )}
          onClick={handleActionClick}
          disabled={disabled}
        >
          <IconActionButton />
        </button>
      ) : null}
    </label>
  );
});

TextField.displayName = 'TextField';

export default TextField;
