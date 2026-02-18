import { useState, useEffect } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";


function Movies() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_TMDB_KEY;
  console.log(import.meta.env.VITE_TMDB_KEY);

  // we also use axios 
  // useEffect(()=>{
  // axios.get("end point of the url along with the url")})}
  // Make sure to import the axios above
  //axios also works with a promise and axios is asynchronous


  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=1`
        );
        console.log(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
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
                className="w-50 bg-zinc-900 rounded-lg overflow-hidden hover:scale-105 duration-300 ease-in-out cursor-pointer shadow-lg"
              >
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                    className="w-full h-64 object-cover forced-color-adjust-auto"
                  />
                )}
                <div className="p-3 bg-zinc-900 border-t-4 border-yellow-400">
                  <h3 className="text-white font-semibold self-center-safe">{movie.title}</h3>
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
