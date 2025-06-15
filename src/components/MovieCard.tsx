import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { Movie } from '../types';

interface Props {
  movie: Movie;
  view?: 'grid' | 'list';
}

function MovieCard({ movie, view }: Props) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link to={`/movie/${movie.id}`} className={`movie-card ${view}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onLoad={() => setLoaded(true)}
        className={`movie-img ${loaded ? 'loaded' : ''}`}
        loading="lazy"
      />
      <div className="info">
        <h3>{movie.title}</h3>
        <p>{movie.vote_average.toFixed(1)} ⭐</p>
      </div>
    </Link>
  );
}

export default MovieCard;
