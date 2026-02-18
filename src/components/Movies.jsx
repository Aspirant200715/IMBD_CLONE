import { useState, useEffect } from "react";
import Banner from "./Banner";

function Movies() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TMDB_KEY;
  console.log(import.meta.env.VITE_TMDB_KEY);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("API error");
        }

        const data = await response.json();
        setTrending(data.results || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">
      <Banner />

      <div className="px-10 py-8">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-8 justify-center">
            {trending.map((movie) => (
              <div
                key={movie.id}
                className="min-w-[200px] bg-zinc-900 rounded-lg overflow-hidden gap-0.5 flex-wrap"
              >
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-64 object-cover"
                  />
                )}
                <div className="p-3">
                  <h3>{movie.title}</h3>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Movies;
