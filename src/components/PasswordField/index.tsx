import React, { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

import { TInputProps } from '~@types/components/TextField';

import TextField from '~@components/TextField';

const PasswordField = (props: TInputProps) => {
  const [isShow, setIsShow] = useState(false);

  const handleShowPass = () => setIsShow(prevState => !prevState);

  return (
    <TextField
      {...props}
      type={isShow ? 'text' : 'password'}
      iconActionButton={isShow ? IoEyeOffOutline : IoEyeOutline}
      onActionClick={handleShowPass}
    />
  );
};

export default PasswordField;
