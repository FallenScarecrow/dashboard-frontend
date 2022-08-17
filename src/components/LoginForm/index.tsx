import React, { ChangeEvent, useState } from 'react';
import * as S from './styles';
import Typography from '../Typography';
import TextField from '../TextField';

const Login = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;

    setData((prev) => ({ ...prev, [target.id]: target.value }));
  };

  return (
    <S.Container>
      <Typography variant={'h2'}>Login</Typography>
      <TextField
        id="email"
        type="email"
        value={data.email}
        placeholder="E-mail"
        onChange={handleChange}
      />
      <TextField
        id="password"
        type="password"
        value={data.password}
        placeholder="Senha"
        onChange={handleChange}
      />
    </S.Container>
  );
};

export default Login;
