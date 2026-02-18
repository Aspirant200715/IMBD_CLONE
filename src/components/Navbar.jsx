import { useState,react } from "react";
import image from "../assets/image.png";
import {Link} from "react-router-dom";


function Navbar() {
  const [selected, setSelected] = useState("Movies");

  return (
    <nav className="bg-zinc-900 text-white px-6 py-3 flex justify-between items-center">

      <div className="flex items-center gap-8">
      <img src={image} alt="logo" className="w-10 h-10 object-contain" />
        <div className="text-2xl font-bold text-yellow-400">
          MovieMania
        </div>
{/* Click → URL changes → Only Page Component Changes */}
{/* When clicked:
Prevents default browser reload
Changes URL using History API
React Router detects URL change
Only matching component re-renders
Navbar + app state remain intact */}

        <div className="hidden md:flex gap-6 font-medium">
          <Link to="/" className="hover:text-yellow-400">Movies</Link>
          <Link to="/WatchList" className="hover:text-yellow-400">WatchList</Link>
          <Link to="/MoodSelector" className="hover:text-yellow-400">MoodSelector</Link>
        
        </div>
      </div>
      <div className="flex items-center gap-4">
        <select
          value={selected}
          onChange={(e) => setSelected(e.target.value)}
          className="bg-zinc-800 border border-zinc-700 px-2 py-1 rounded text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400">
          <option>Movies</option>
          <option>Series</option>
          <option>Episodes</option>
        </select>
        <button className="hidden sm:block hover:text-yellow-400 font-medium">
          Watchlist
        </button>
        <button className="bg-yellow-400 text-black px-4 py-1.5 rounded font-semibold hover:bg-yellow-500 transition">
          Sign In
        </button>

      </div>
    </nav>
  );
}

export default Navbar;
