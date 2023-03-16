type TMovie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type TMovies = {
  dates: { maximum: string; minimum: string };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

type TProviderId = 'google' | 'github' | 'discord';
type TProvider = {
  id: TProviderId;
  src: string;
  callback?: string;
};

export { IMovie, IMovie, TProviderId, TProvider };
