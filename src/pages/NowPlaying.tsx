import { useEffect, useState } from 'react';
import { fetchNowPlaying } from '../services/tmdbApi';
import type { Movie } from '../types';
import MovieCard from '../components/MovieCard';

function NowPlaying() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchNowPlaying().then(data => setMovies(data.results));
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
    </div>
  );
}

export default NowPlaying;
