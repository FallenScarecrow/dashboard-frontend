import { TReturnVersions as TMoviesVersions, VERSIONS as moviesVersions, movies } from './movies';

type TApiVersionsMovies = keyof TMoviesVersions;

export interface APIList {
  [index: string]: { [index: string]: unknown };
}

export const APIS: APIList = {
  movies: moviesVersions,
};

class GeneratedAPIs<V extends TApiVersionsMovies> {
  movies: TMoviesVersions[V];

  constructor(version: V) {
    this.movies = movies(version);
  }
}

class TMDbApi {
  private static v3: GeneratedAPIs<'v3'> | null;
  private static v4: GeneratedAPIs<'v4'> | null;

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
