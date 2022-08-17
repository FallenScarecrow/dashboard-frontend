import { ReactNode } from 'react';
import * as S from './styles';

type SimpleLayoutProps = {
  children: ReactNode;
};

const SimpleLayout = ({ children }: SimpleLayoutProps) => {
  return (
    <S.SimpleLayout>
      {children}
    </S.SimpleLayout>
  );
};

export default SimpleLayout;
