import { IoKeyOutline, IoMailOutline, IoPersonOutline } from 'react-icons/io5';
import { Fields } from '~@types/components/Form';
import { ANIMATION_TIMEOUT } from '~@components/MountAnimation';

type RegisterFieldsData = 'username' | 'email' | 'confirm-email' | 'password' | 'confirm-password';

const registerFields: Fields[] = [
  {
    id: 'username',
    name: 'username',
    type: 'text',
    icon: IoPersonOutline,
    variant: 'outlined',
    focusIn: ANIMATION_TIMEOUT,
    required: true,
    fullWidth: true,
    placeholder: 'Username',
    autoComplete: 'username',
  },
  {
    id: 'email',
    name: 'email',
    type: 'text',
    icon: IoMailOutline,
    variant: 'outlined',
    required: true,
    fullWidth: true,
    placeholder: 'E-mail',
    autoComplete: 'email',
  },
  {
    id: 'confirm-email',
    name: 'confirm-email',
    type: 'text',
    icon: IoMailOutline,
    variant: 'outlined',
    required: true,
    fullWidth: true,
    placeholder: 'Confirm Email',
    autoComplete: 'email',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    icon: IoKeyOutline,
    variant: 'outlined',
    color: 'primary',
    required: true,
    fullWidth: true,
    placeholder: 'Password',
    autoComplete: 'new-password',
  },
  {
    id: 'confirm-password',
    name: 'confirm-password',
    type: 'password',
    icon: IoKeyOutline,
    variant: 'outlined',
    color: 'primary',
    required: true,
    fullWidth: true,
    placeholder: 'Confirm Password',
    autoComplete: 'new-password',
  },
];

export default registerFields;
export type { RegisterFieldsData };
