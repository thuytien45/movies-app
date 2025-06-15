import { Link } from 'react-router-dom';
import type { Movie } from '../types';

interface Props {
  movie: Movie;
}

function MovieCard({ movie }: Props) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        loading="lazy"
      />
      <div className="info">
        <h3>{movie.title}</h3>
        <p>{movie.vote_average} ⭐</p>
      </div>
    </Link>
  );
}

export default MovieCard;
