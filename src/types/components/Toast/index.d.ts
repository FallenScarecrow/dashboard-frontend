import { ReactNode } from 'react';
import { TStatus } from '~@types/_app';

type TToastProps = {
  type: TStatus;
  title?: string | ReactNode;
  description: string | ReactNode;
};

export { TToastProps };
