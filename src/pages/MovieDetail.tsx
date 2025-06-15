import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  fetchMovieDetail,
  fetchMovieCredits,
  fetchMovieVideos,
} from '../services/tmdbApi';
import type { Movie } from '../types';

interface CastMember {
  id: number;
  name: string;
  character: string;
  profile_path: string | null;
}

function MovieDetail() {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [cast, setCast] = useState<CastMember[]>([]);
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    (async () => {
      try {
        const [detailRes, creditsRes, videosRes] = await Promise.all([
          fetchMovieDetail(Number(id)),
          fetchMovieCredits(Number(id)),
          fetchMovieVideos(Number(id)),
        ]);

        setMovie(detailRes);

        // Grab first 8 cast members with profile pictures
        setCast(
          creditsRes.cast
            .filter((c: CastMember) => !!c.profile_path)
            .slice(0, 8)
        );

        // Find the first YouTube trailer
        const trailer = videosRes.results.find(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (v: any) => v.type === 'Trailer' && v.site === 'YouTube'
        );
        if (trailer) setTrailerKey(trailer.key);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (err) {
        setError('Could not load movie details. Please try again.');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading) return <p className="status">Loading …</p>;
  if (error)   return <p className="status error">{error}</p>;
  if (!movie)  return null; // should not happen

  return (
    <div className="detail-page">
      <Link to="/" className="back-link">← Back</Link>

      <header className="hero">
        <img
          className="poster"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="meta">
          <h1>{movie.title}</h1>
          <p className="tagline">{movie.tagline}</p>
          <p>
            <strong>Release:</strong> {movie.release_date}
          </p>
          <p>
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
          <p>
            <strong>Runtime:</strong> {movie.runtime} min
          </p>
          <p className="overview">{movie.overview}</p>
        </div>
      </header>

      {trailerKey && (
        <section className="trailer">
          <h2>Trailer</h2>
          <iframe
            title="Trailer"
            width="100%"
            height="460"
            allowFullScreen
            src={`https://www.youtube.com/embed/${trailerKey}`}
          />
        </section>
      )}

      {!!cast.length && (
        <section className="cast">
          <h2>Cast</h2>
          <div className="cast-grid">
            {cast.map(member => (
              <div key={member.id} className="cast-card">
                <img
                  src={`https://image.tmdb.org/t/p/w185${member.profile_path}`}
                  alt={member.name}
                  loading="lazy"
                />
                <p className="name">{member.name}</p>
                <p className="character">as {member.character}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default MovieDetail;
