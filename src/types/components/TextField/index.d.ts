import React from 'react';
import { IconType } from 'react-icons/lib';
import { TThemeColors } from '~@types/_app';

type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  type: 'email' | 'text' | 'password' | 'search' | 'url' | 'tel';
  placeholder: string;
  fullWidth?: boolean;
  color?: TThemeColors;
  icon?: IconType;
  iconActionButton?: IconType;
  onActionClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export { TInputProps };
