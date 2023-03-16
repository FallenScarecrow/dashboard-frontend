import {
  IoAlertCircleOutline,
  IoCheckmarkDoneCircleOutline,
  IoInformationCircleOutline,
  IoWarningOutline,
} from 'react-icons/io5';

import { TIcons } from '~@types/_app';

const statusIcons: TIcons = {
  info: IoInformationCircleOutline,
  warning: IoWarningOutline,
  error: IoAlertCircleOutline,
  success: IoCheckmarkDoneCircleOutline,
};

export { statusIcons };
