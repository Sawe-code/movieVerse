import React from "react";
const IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_URL;

const MovieDetailsCard = ({ moviedetail }) => {
  console.log("Image_URL", IMAGE_URL);
  console.log("moviedetail", moviedetail.poster_path);
  return (
    <div className="card flex items-center justify-start gap-7 border border-[#000] p-[20px] rounded-xl">
      <figure className="">
        <img
          src={
            moviedetail.poster_path
              ? `${IMAGE_URL}${moviedetail.poster_path}`
              : "/no-movie.png"
          }
          alt={moviedetail.title}
          className="w-full md:w-64 h-auto object-cover border-[5px] rounded-full border-gray-400 shadow-xl"
        />
      </figure>
      <div className="flex-1 flex flex-col gap-4">
        <h1>{moviedetail.title}</h1>
        <p className="text-xs text-gray-300 max-w-3xl w-[100ch]">{moviedetail.overview}</p>
        <p className="text-sm text-gray-500">Language: {moviedetail.original_language.toUpperCase()}</p>
        <p className="text-sm text-gray-500">Release Date: {moviedetail.release_date}</p>
        <p className="text-sm text-gray-500">Vote Average: {moviedetail.vote_average}</p>
        <p className="text-sm text-gray-500">Vote Count: {moviedetail.vote_count}</p>
        <div className="flex flex-wrap gap-1">
          {moviedetail.genres?.map((genre) => (
            <span key={moviedetail.id} className="px-2 py-1 text-xs rounded-md bg-yellow-500/20 border border-yellow-500">{genre.name}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsCard;
