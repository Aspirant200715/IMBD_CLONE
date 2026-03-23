import React, { useContext, useState, useEffect } from "react";
import { MovieContext } from "./MovieContext";
import { genreMap } from "./genre";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

function MoodSelector() {
  // Get the global context variables including watchlist tools for the MovieCards
  const {
    selectedMood,
    setSelectedMood,
    watchlist,
    handleAddtoWatchlist,
    handleRemoveFromWatchlist,
  } = useContext(MovieContext);

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const API_KEY = import.meta.env.VITE_TMDB_KEY;

  const moods = [
    { id: 1, label: "Happy", emoji: "😊", color: "bg-yellow-500" },
    { id: 2, label: "Sad", emoji: "😢", color: "bg-blue-500" },
    { id: 3, label: "Excited", emoji: "🤩", color: "bg-red-500" },
    { id: 4, label: "Relaxed", emoji: "😌", color: "bg-green-500" },
    { id: 5, label: "Adventurous", emoji: "🤠", color: "bg-orange-500" },
    { id: 6, label: "Scared", emoji: "😱", color: "bg-purple-500" },
    { id: 7, label: "Romantic", emoji: "🥰", color: "bg-pink-500" },
  ];

  // Map mood IDs to string labels that explicitly match the values in genre.js
  const moodToGenreString = {
    1: "Comedy", // Happy
    2: "Drama", // Sad
    3: "Action", // Excited
    4: "Animation", // Relaxed
    5: "Adventure", // Adventurous
    6: "Horror", // Scared
    7: "Fantasy", // Romantic (Mapping to Fantasy because Romance isn't in genre.js)
  };

  useEffect(() => {
    const fetchMoodMovies = async () => {
      if (!selectedMood) {
        setMovies([]);
        return;
      }
      try {
        setLoading(true);
        const genreName = moodToGenreString[selectedMood];

        // Lookup the genre ID from genre.js by finding the key that matches our string value
        const genreId = Object.keys(genreMap).find(
          (key) => genreMap[key] === genreName,
        );

        if (genreId) {
          const url = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&page=${page}`;
          const response = await fetch(url);
          if (!response.ok) throw new Error("API error");
          const data = await response.json();
          setMovies(data.results || []);
        }
      } catch (error) {
        console.error("Error fetching mood movies:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMoodMovies();
  }, [selectedMood, page]);

  const handleMoodSelect = (mood) => {
    // Toggle selection: if already selected, clear it. Otherwise, set it to the new mood.
    setSelectedMood(mood.id === selectedMood ? null : mood.id);
    setPage(1); // Reset page number to 1 when a new mood is chosen
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-yellow-400">
        How are you feeling today?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {moods.map((mood) => (
          <button
            key={mood.id}
            onClick={() => handleMoodSelect(mood)}
            className={`
              flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-300 transform hover:scale-105
              ${
                selectedMood === mood.id
                  ? `${mood.color} text-white shadow-lg scale-105 ring-4 ring-white/20`
                  : "bg-slate-800 hover:bg-slate-700 text-slate-300"
              }
            `}
          >
            <span className="text-4xl mb-3">{mood.emoji}</span>
            <span className="text-lg font-semibold">{mood.label}</span>
          </button>
        ))}
      </div>

      {/* Dynamically render the fetched movies below the mood selector */}
      {selectedMood && (
        <div className="mt-16 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-slate-200">
            Recommended Movies
          </h2>
          {loading ? (
            <p className="text-center text-lg">Loading...</p>
          ) : (
            <>
              <div className="flex flex-wrap gap-8 justify-center">
                {movies.map((movie) => (
                  <MovieCard
                    key={movie.id}
                    movie={movie}
                    watchlist={watchlist}
                    handleAddtoWatchlist={handleAddtoWatchlist}
                    handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                  />
                ))}
              </div>
              {movies.length > 0 && (
                <Pagination page={page} setPage={setPage} />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default MoodSelector;
