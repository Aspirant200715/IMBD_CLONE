import { React, useState } from "react";
import { genreMap } from "./genre";

function Watchlist({ watchlist, setWatchlist, handleRemoveFromWatchlist }) {
  const [selectedGenre, setSelectedGenre] = useState("All");

  const genres = ["All"];
  watchlist.forEach((movie) => {
    const genre = genreMap[movie.genre_ids[0]];
    if (!genres.includes(genre)) {
      genres.push(genre);
    }
  });

  const filteredMovies =
    selectedGenre === "All"
      ? watchlist
      : watchlist.filter(
          (movie) => genreMap[movie.genre_ids[0]] === selectedGenre,
        );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-8 border-b border-slate-800 pb-4">
        My Watchlist
      </h1>

      <div className="mb-6 flex gap-4 items-center">
        <label className="text-slate-300 font-medium">Filter by Genre:</label>

        <select
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
          className="bg-slate-800 border border-slate-700 px-3 py-1 rounded text-sm"
        >
          {genres.map((genre) => (
            <option key={genre}>{genre}</option>
          ))}
        </select>
      </div>

      {watchlist.length === 0 ? (
        <p className="text-slate-400 text-center text-lg">
          Your watchlist is empty.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800 text-slate-300 uppercase text-sm tracking-wider">
                <th className="p-4">Poster</th>
                <th className="p-4">Name</th>
                <th className="p-4">Rating</th>
                <th className="p-4">Popularity</th>
                <th className="p-4">Genre</th>
                <th className="p-4 text-red-500">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-800">
              {filteredMovies.map((movie) => (
                <tr key={movie.id} className="hover:bg-slate-900 transition">
                  <td className="p-4">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      className="w-16 h-24 object-cover rounded shadow"
                    />
                  </td>

                  <td className="p-4 font-semibold">{movie.title}</td>

                  <td className="p-4 text-yellow-400">
                    ⭐ {movie.vote_average}
                  </td>

                  <td className="p-4">{movie.popularity}</td>

                  <td className="p-4">
                    <span className="bg-slate-800 px-3 py-1 rounded-full text-xs border border-slate-700 border-2 text-slate-300">
                      {genreMap[movie.genre_ids[0]]}
                    </span>
                  </td>

                  <td className="p-4">
                    <button
                      onClick={() => handleRemoveFromWatchlist(movie)}
                      className="text-red-500 hover:text-red-400 transition font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Watchlist;
