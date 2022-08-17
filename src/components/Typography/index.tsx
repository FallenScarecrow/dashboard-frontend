import { ReactNode } from 'react';
import * as S from './styles';

type TypographyProps = {
  children?: ReactNode;
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Typography = ({ children, variant }: TypographyProps) => {
  const TextField = S.TextField[variant];

  return (
      <TextField>
        {children}
      </TextField>
  );
};

export default Typography;
