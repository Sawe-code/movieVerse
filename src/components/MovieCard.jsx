import { useContext } from "react";
import { Link } from "react-router-dom";
import { MovieContext } from "../../contexts/MovieContext";
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

const MovieCard = ({ movie }) => {
  const { toggleFavorites, favorites } = useContext(MovieContext);

  const isFavorite = favorites.some((m) => m.id === movie.id); // this returns true or false
  return (
    <div className="relative card w-full flex overflow-hidden hover:scale-[1.02] transition duration-300">
      <img
        src={
          movie.poster_path
            ? `${IMAGE_URL}${movie.poster_path}`
            : "/no-movie.png"
        }
        alt={movie.title}
        className="w-32 h-[200px] object-cover"
      />
      <div className="card-body p-4 flex flex-col justify-between gap-2">
        <h2 className="line-clamp-1 text-lg font-semibold">{movie.title}</h2>
        <button className="absolute top-0 right-0 cursor-pointer px-2 py-1" onClick={() => toggleFavorites(movie)}>{isFavorite ? "❤️" : "🤍"}</button>
        <div className="flex flex-wrap gap-1">
          {movie.genre_ids?.slice(0, 3).map((genre, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-md bg-white/10 border border-white/10">
              {genre}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-sm">
          <span>
            <img src="/star.svg" alt="star-icon" className="w-4" />
          </span>{" "}
          ●<span>{movie.vote_average.toFixed(1)}</span>
        </div>
        <p className="text-sm text-gray-400">Country: {movie.original_language}</p>
        <p className="text-sm year">
          Release Date: {movie.release_date}
        </p>
        <Link to={`/movie/${movie.id}`} className="button">Show Details</Link>
      </div>
    </div>
  );
};

export default MovieCard;
