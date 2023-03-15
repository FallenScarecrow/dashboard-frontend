import { useRef, useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

import TextField, { IInputProps } from '../TextField';

const PasswordField = (props: IInputProps) => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const [isShow, setIsShow] = useState(false);

  const handleShowPass = () => {
    if (!passwordRef.current) return;

    setIsShow(!isShow);

    if (!isShow) {
      passwordRef.current.type = 'text';
    } else {
      passwordRef.current.type = 'password';
    }
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
