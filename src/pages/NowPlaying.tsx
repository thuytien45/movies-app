/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { fetchNowPlaying, searchMovies } from '../services/tmdbApi';
import type { Movie } from '../types';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

function NowPlaying() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = searchQuery
          ? await searchMovies(searchQuery)
          : await fetchNowPlaying();
        setMovies(data.results || []);
      } catch (err) {
        setError('Failed to fetch movies.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <>
      <SearchBar onSearch={setSearchQuery} />

      {loading && <p className="status">Loading…</p>}
      {error && <p className="status error">{error}</p>}
      {!loading && movies.length === 0 && <p className="status">No results found.</p>}

      <div className="movie-list">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default NowPlaying;
