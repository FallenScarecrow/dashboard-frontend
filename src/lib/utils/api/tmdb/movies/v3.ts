import axios, { AxiosPromise } from 'axios';
import { movies_v3 } from '~@types/lib/utils/api/tmdb/movies/v3';
import { env } from '~@env/server.mjs';

const fetch = axios.create({
  baseURL: env.NEXT_PUBLIC_TMDB_URL,
  params: {
    api_key: env.TMDB_V3_KEY,
    language: 'en-US',
  },
});

export class Movies {
  public movies: Resources$Movies;

  constructor() {
    this.movies = new Resources$Movies();
  }
}

export class Resources$Movies {
  search(query: string): AxiosPromise<movies_v3.Schema$Movies>;
  search(query: string): void;
  search(query: string) {
    return fetch.get<movies_v3.Schema$Movies>('3/search/movie', { params: { query } });
  }

  getTrending(): AxiosPromise<movies_v3.Schema$Movies>;
  getTrending(): void;
  getTrending() {
    return fetch.get<movies_v3.Schema$Movies>('3/trending/movie/week');
  }

  getLatest(): AxiosPromise<movies_v3.Schema$Movie>;
  getLatest(): void;
  getLatest() {
    return fetch.get<movies_v3.Schema$Movie>('3/movie/latest');
  }

  getNowPlaying(): AxiosPromise<movies_v3.Schema$Movies>;
  getNowPlaying(): void;
  getNowPlaying() {
    return fetch.get<movies_v3.Schema$Movies>('3/movie/now_playing');
  }

  getPopular(): AxiosPromise<movies_v3.Schema$Movies>;
  getPopular(): void;
  getPopular() {
    return fetch.get<movies_v3.Schema$Movies>('3/movie/popular');
  }

  getTopRated(): AxiosPromise<movies_v3.Schema$Movies>;
  getTopRated(): void;
  getTopRated() {
    return fetch.get<movies_v3.Schema$Movies>('3/movie/top_rated');
  }

  getUpcoming(): AxiosPromise<movies_v3.Schema$Movies>;
  getUpcoming(): void;
  getUpcoming() {
    return fetch.get<movies_v3.Schema$Movies>('3/movie/upcoming');
  }
}
