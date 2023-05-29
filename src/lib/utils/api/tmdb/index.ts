import { VERSIONS as moviesVersions, movies } from './movies';

export interface APIList {
  [index: string]: { [index: string]: unknown };
}

export const APIS: APIList = {
  movies: moviesVersions,
};

class GeneratedAPIs {
  movies;

  constructor(version: 'v3' | 'v4') {
    this.movies = movies(version).movies;
  }
}

class TMDbApi {
  private static v3: GeneratedAPIs | null;
  private static v4: GeneratedAPIs | null;

  static getV3() {
    if (!this.v3) {
      this.v3 = new GeneratedAPIs('v3');
    }

    return this.v3;
  }

  static getV4() {
    if (!this.v4) {
      this.v4 = new GeneratedAPIs('v4');
    }

    return this.v4;
  }
}

export { TMDbApi };
