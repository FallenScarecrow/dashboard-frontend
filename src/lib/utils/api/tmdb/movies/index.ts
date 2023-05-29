import Error from 'next/error';
import { Movies as Movies_v3 } from './v3';
import { Movies as Movies_v4 } from './v4';

export const VERSIONS = {
  v3: Movies_v3,
  v4: Movies_v4,
};

/**
 *
 * @param version Which version of the API will be used
 *
 * @returns Links related with the version used
 * @throws Error if passed a version not developed
 */
export function movies(version: 'v3'): Movies_v3;
export function movies(version: 'v4'): Movies_v4;
export function movies(version = 'v3') {
  switch (version) {
    case 'v3':
      return new Movies_v3();
    case 'v4':
      return new Movies_v4();
    default:
      throw new Error({ title: 'Not implemented yet', statusCode: 400 });
  }
}
