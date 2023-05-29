import axios, { AxiosPromise } from 'axios';
import { users_v1 } from '~@types/lib/utils/api/api/users/v1';
import { env } from '~@env/client.mjs';
import { Api } from '~@types/_api';

const fetch = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
});

export class Users {
  public users: Resources$Users;

  constructor() {
    this.users = new Resources$Users();
  }
}

export class Resources$Users {
  register(user: Partial<users_v1.Schema$User>): AxiosPromise<Api.TSessionApi>;
  register(user: Partial<users_v1.Schema$User>): void;
  register(user: Partial<users_v1.Schema$User>) {
    return fetch.post<Api.TSessionApi>('user/register', user);
  }
}
