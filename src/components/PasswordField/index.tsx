import { useRef, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

import { TInputProps } from '~@types/components/TextField';

import TextField from '~@components/TextField';

const PasswordField = (props: TInputProps) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isShow, setIsShow] = useState(false);

  const handleShowPass = () => {
    if (!passwordRef.current) return;

    setIsShow(!isShow);

    passwordRef.current.type = !isShow ? 'text' : 'password';
  };

  return (
    <TextField
      {...props}
      ref={passwordRef}
      type="password"
      iconActionButton={isShow ? IoEyeOffOutline : IoEyeOutline}
      onActionClick={handleShowPass}
    />
  );
};

PasswordField.displayName = 'PasswordField';

export default PasswordField;
