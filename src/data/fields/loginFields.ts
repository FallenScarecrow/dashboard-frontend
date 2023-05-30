import { IoKeyOutline, IoPersonOutline } from 'react-icons/io5';
import { Fields } from '~@types/components/Form';
import { ANIMATION_TIMEOUT } from '~@components/MountAnimation';

const loginFields: Fields[] = [
  {
    id: 'username',
    name: 'username',
    type: 'text',
    icon: IoPersonOutline,
    variant: 'outlined',
    focusIn: ANIMATION_TIMEOUT,
    required: true,
    fullWidth: true,
    placeholder: 'Username / Email',
    autoComplete: 'username',
  },
  {
    id: 'password',
    name: 'password',
    type: 'password',
    icon: IoKeyOutline,
    color: 'primary',
    variant: 'outlined',
    required: true,
    fullWidth: true,
    placeholder: 'Password',
    autoComplete: 'current-password',
  },
];

export default loginFields;
