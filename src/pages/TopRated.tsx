import { useEffect, useState } from 'react';
import { fetchTopRated } from '../services/tmdbApi';
import type { Movie } from '../types';
import MovieCard from '../components/MovieCard';

function TopRated() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await fetchTopRated();
        setMovies(data.results);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Failed to load movies. Please try again.');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) return <p className="status">Loading …</p>;
  if (error)   return <p className="status error">{error}</p>;

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default TopRated;
