import { ChangeEvent, FocusEvent, forwardRef, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import { IconType } from 'react-icons/lib';

import { ThemeColors } from '~@types/_app';

import Typography from '~@components/Typography';

import styles from './styles.module.css';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  fullWidth?: boolean;
  color?: ThemeColors;
  icon?: IconType;
  iconActionButton?: string;
  onActionClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const TextField = forwardRef<HTMLInputElement, IInputProps>((props: IInputProps, ref) => {
  const {
    fullWidth = false,
    color = 'primary',
    placeholder,
    value,
    onChange: customHandleChange,
    iconActionButton,
    id,
    disabled,
    icon: Icon,
    onActionClick: handleActionClick,
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

    // container.classList.toggle('');
  };

  return (
    <label
      htmlFor={id}
      // eslint-disable-next-line tailwindcss/no-custom-classname
      className={clsx(
        'group relative m-1 my-4 inline-block h-12 w-full max-w-xs cursor-text',
        fullWidth && 'max-w-[calc(100%-0.5rem)]',
        disabled && 'cursor-not-allowed select-none',
        value && 'valid',
      )}
    >
      <input
        id={id}
        ref={ref}
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
          iconActionButton ? 'pr-10' : 'focus:pr-4 group-[.valid]:pr-4',
        )}
        disabled={disabled}
        {...rest}
      />
      {Icon ? (
        <div
          className={clsx(
            'absolute top-1/2 -translate-y-1/3 px-2 text-base transition-colors duration-500',
            'peer-focus:text-white peer-focus:dark:text-black',
            'group-[.valid]:text-white group-[.valid]:dark:text-black',
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
          'absolute top-1/2 left-4 -translate-y-1/3 px-1 capitalize text-black transition-[top,font-size,left] duration-500 dark:text-white',
          'peer-focus:-top-2 peer-focus:left-0 peer-focus:text-xs',
          'group-[.valid]:-top-2 group-[.valid]:left-0 group-[.valid]:text-xs',
          'peer-disabled:select-none peer-disabled:text-opacity-40',
          Icon ? 'left-9' : 'left-4',
        )}
      >
        {placeholder}
      </Typography>
      {iconActionButton ? (
        <button
          type="button"
          className={clsx(
            'absolute top-1/2 right-1 z-10 -translate-y-1/3 rounded-full p-1 text-black outline-none',
            'peer-disabled:select-none peer-disabled:text-opacity-40',
          )}
          onClick={handleActionClick}
          disabled={disabled}
        >
          {iconActionButton}
        </button>
      ) : null}
    </label>
  );
});

TextField.displayName = 'TextField';

export default TextField;
