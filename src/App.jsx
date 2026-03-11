import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar.jsx";
import Movies from "./components/Movies.jsx";
import WatchList from "./components/WatchList.jsx";
import MoodSelector from "./components/MoodSelector.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

//we can write in lowercase and uppercase while writing the path
//added to watchlist in app.jsx
function App() {
  const [watchlist, setWatchlist] = useState([]);


  //adding a new movie to the watchlist 
  const handleAddtoWatchlist = (movieObj) => {
    let newWatchList = [...watchlist, movieObj];  //add a new movie in the already avaialable list
    localStorage.setItem("watchlist", JSON.stringify(newWatchList));
    setWatchlist(newWatchList);
  };



  //removing the movie from the watchlist
  const handleRemoveFromWatchlist = (movieObj) => {
    let filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    setWatchlist(filteredWatchList);
    localStorage.setItem("watchlist", JSON.stringify(filteredWatchList));
  };



  //updating the local storage 
  useEffect(() => {
    let moviesFromLS = localStorage.getItem("watchlist");
    if (!moviesFromLS) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLS));
  }, []);


  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <Movies
                watchlist={watchlist}
                handleAddtoWatchlist={handleAddtoWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          />
          <Route
            path="/Movies"
            element={
              <Movies
                watchlist={watchlist}
                handleAddtoWatchlist={handleAddtoWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          />
          <Route
            path="/Watchlist"
            element={
              <WatchList
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
              />
            }
          />
          <Route path="/Moodselector" element={<MoodSelector />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
