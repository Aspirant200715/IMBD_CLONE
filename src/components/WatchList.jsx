import { useState } from "react";

function Watchlist() {
  const [watchlist, setWatchlist] = useState([
    {
      id: 1,
      title: "Inception",
      year: "2010",
    },
    {
      id: 2,
      title: "Interstellar",
      year: "2014",
    },
    {
      id: 3,
      title: "The Dark Knight",
      year: "2008",
    },
    {
      id: 4,
      title: "The Shawshank Redemption",
      year: "1994",
    },
    {
      id: 5,
      title: "Pulp Fiction",
      year: "1994",
    },
    {
      id: 6,
      title: "The Matrix",
      year: "1999",
    }
    // Add more movies as needed
  ]);

  const removeMovie = (id) => {
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p className="text-zinc-400">Your watchlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              className="bg-zinc-900 p-4 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-semibold">{movie.title}</h2>
              <p className="text-zinc-400">{movie.year}</p>

              <button
                onClick={() => removeMovie(movie.id)}
                className="mt-4 bg-red-500 px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Watchlist;
