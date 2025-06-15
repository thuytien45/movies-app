import { useEffect, useState } from 'react';
import {
  fetchNowPlaying,
  searchMovies,
} from '../services/tmdbApi';
import type { Movie } from '../types';

import MovieCard     from '../components/MovieCard';
import SkeletonCard  from '../components/SkeletonCard';
import SearchBar     from '../components/SearchBar';
import ToggleView    from '../components/ToggleView';

function NowPlaying() {
  const [movies, setMovies]   = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery]     = useState('');
  const [view, setView]       = useState<'grid' | 'list'>('grid');
  const [error, setError]     = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();   // ← cancels fetch if component unmounts
    (async () => {
      try {
        setLoading(true);
        const data = query
          ? await searchMovies(query)
          : await fetchNowPlaying();
        setMovies(data.results || []);
        setError(null);
      } catch {
        setError('Failed to fetch movies. Please try again.');
      } finally {
        setLoading(false);
      }
    })();
    return () => controller.abort();
  }, [query]);

  /* ----- how many skeletons to render while loading ----- */
  const skeletonCount = view === 'grid' ? 12 : 6;
  const skeletons = Array.from({ length: skeletonCount });

  return (
    <>
      <SearchBar  onSearch={setQuery} />
      <ToggleView view={view} onChange={setView} />

      {/* -------- error state -------- */}
      {error && !loading && (
        <p className="status error">{error}</p>
      )}

      {/* -------- content / skeletons -------- */}
      <div className={`movie-list ${view}`}>
        {loading
          ? skeletons.map((_, i) => (
              <SkeletonCard key={i} view={view} />
            ))
          : movies.map((m) => (
              <MovieCard key={m.id} movie={m} view={view} />
            ))}
      </div>

      {/* -------- empty-result state -------- */}
      {!loading && !error && movies.length === 0 && (
        <p className="status">No results found.</p>
      )}
    </>
  );
}

export default NowPlaying;
