import React, { ReactNode } from 'react';
import clsx from 'clsx';
import {
  IoAlertCircleOutline,
  IoCheckmarkDoneCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from 'react-icons/io5';

import { ThemeStatus } from '~@types/_app';
import Typography from '~@components/Typography';

import styles from './style.module.css';

// eslint-disable-next-line no-unused-vars
const icons: { [x in ThemeStatus]: ReactNode } = {
  info: <IoInformationCircleOutline />,
  warning: <IoWarningOutline />,
  error: <IoAlertCircleOutline />,
  success: <IoCheckmarkDoneCircleOutline />,
};

export interface IToastProps {
  type: ThemeStatus;
  title?: string | React.ReactNode;
  description: string | React.ReactNode;
}

const Toast = ({ type, title, description }: IToastProps) => {
  return (
    <div
      className={clsx(
        'peer z-50 mt-4 mr-4 flex w-full items-center border-l-4 border-solid bg-white p-2 shadow-md shadow-black/20 transition-all dark:bg-zinc-800 dark:shadow-white/0',
        'sm:m-0 sm:ml-4 sm:mb-4 sm:min-w-[350px] sm:p-4 sm:peer-[]:mb-2',
        styles[`toast-${type}`],
      )}
    >
      <Typography variant="heading" component="div" size="large">
        {icons[type]}
      </Typography>
      <div className="ml-4 inline-flex flex-col">
        {title ? (
          <Typography variant="heading" component="h2" size="medium">
            {title}
          </Typography>
        ) : null}
        <Typography variant="body" component="p" size="large">
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default Toast;
