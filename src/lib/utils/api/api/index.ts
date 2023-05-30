import { VERSIONS as usersVersions, users } from './users';

export interface APIList {
  [index: string]: { [index: string]: unknown };
}

export const APIS: APIList = {
  users: usersVersions,
};

class GeneratedAPIs {
  users;

  constructor(version: 'v1') {
    this.users = users(version).users;
  }
}

class MainApi {
  private static v1: GeneratedAPIs | null;

  static getV1() {
    if (!this.v1) {
      this.v1 = new GeneratedAPIs('v1');
    }

    return this.v1;
  }
}

export { MainApi };
