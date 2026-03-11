import { useState, useEffect } from "react";
import Banner from "./Banner";
import { Link } from "react-router-dom";
import Pagination from "./Pagination.jsx";
import MovieCard from "./MovieCard";

function Movies({
  watchlist,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
}) {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
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
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}&page=${page}`,
        );
        console.log(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
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
  }, [page]);

  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Banner />
      {/*  TRENDING MOVIES CORNER*/}
      <div className="px-10 py-8">
        <h2 className="text-2xl font-bold mb-6">Trending Now</h2>

        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : (
          <div className="flex flex-wrap gap-8 justify-center">
            {trending.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                watchlist={watchlist}
                handleAddtoWatchlist={handleAddtoWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            ))}
          </div>
        )}
      </div>
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default Movies;
