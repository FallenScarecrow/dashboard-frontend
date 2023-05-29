import Error from 'next/error';
import { Users as Users_v1 } from './v1';

export const VERSIONS = {
  v3: Users_v1,
};

/**
 *
 * @param version Which version of the API will be used
 *
 * @returns Links related with the version used
 * @throws Error if passed a version not developed
 */
export function users(version: 'v1'): Users_v1;
export function users(version = 'v1') {
  switch (version) {
    case 'v1':
      return new Users_v1();
    default:
      throw new Error({ title: 'Not implemented yet', statusCode: 400 });
  }
}
