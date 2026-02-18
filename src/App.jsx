import React from "react";
import Navbar from "./components/Navbar.jsx";
import Movies from "./components/Movies.jsx";
import WatchList from "./components/WatchList.jsx";
import MoodSelector from "./components/MoodSelector.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";

//we can write in lowercase and uppercase while writing the path
function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<Movies/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        <Route path="/Watchlist" element={<WatchList/>}/>
        <Route path="/Moodselector" element={<MoodSelector/>}/>   
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;