import { ReactNode } from 'react';

type CleanLayoutProps = {
  children: ReactNode;
};

const CleanLayout = ({ children }: CleanLayoutProps) => {
  return <div className="flex min-h-full w-full flex-col justify-between">{children}</div>;
};

export default CleanLayout;
