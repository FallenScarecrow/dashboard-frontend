import { ReactNode } from 'react';
import ButtonTheme from '~@components/ButtonTheme';

type CleanLayoutProps = {
  children: ReactNode;
};

const CleanLayout = ({ children }: CleanLayoutProps) => {
  return (
    <div className="flex min-h-full w-full flex-col justify-between">
      <div className="absolute top-5 right-5 z-50">
        <ButtonTheme />
      </div>
      {children}
    </div>
  );
};

export default CleanLayout;
