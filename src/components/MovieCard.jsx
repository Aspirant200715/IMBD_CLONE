import React from "react";
import WatchListButton from "./WatchListButton";

function MovieCard({
  movie,
  watchlist,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
}) {
  return (
    <div className="w-[200px] relative bg-slate-800 rounded-lg overflow-hidden hover:scale-105 duration-300 ease-in-out cursor-pointer shadow-lg hover:shadow-yellow-400/30 hover:shadow-xl">
      <WatchListButton
        movie={movie}
        watchlist={watchlist}
        handleAddtoWatchlist={handleAddtoWatchlist}
        handleRemoveFromWatchlist={handleRemoveFromWatchlist}
      />
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="p-3 bg-slate-900 border-t-4 border-yellow-400">
        <h3 className="text-white font-semibold text-center truncate">
          {movie.title}
        </h3>
      </div>
    </div>
  );
}

export default MovieCard;
