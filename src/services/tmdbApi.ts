const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const getOptions = () => ({
  headers: {
    Authorization: `Bearer ${API_KEY}`
  }
});

export const fetchNowPlaying = async () => {
  const res = await fetch(`${BASE_URL}/movie/now_playing?language=en-US&page=1`, getOptions());
  return res.json();
};

export const fetchTopRated = async () => {
  const res = await fetch(`${BASE_URL}/movie/top_rated?language=en-US&page=1`, getOptions());
  return res.json();
};

export const fetchMovieDetail = async (id: number) => {
  const res = await fetch(`${BASE_URL}/movie/${id}?language=en-US`, getOptions());
  return res.json();
};

export const fetchMovieCredits = async (id: number) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/credits?language=en-US`, getOptions());
  return res.json();
};

export const fetchMovieVideos = async (id: number) => {
  const res = await fetch(`${BASE_URL}/movie/${id}/videos?language=en-US`, getOptions());
  return res.json();
};
export const searchMovies = async (query: string) => {
  const res = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
  );
  return res.json();
};