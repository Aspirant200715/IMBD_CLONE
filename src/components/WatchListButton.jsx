import React from "react";

function WatchListButton({
  movie,
  watchlist,
  handleAddtoWatchlist,
  handleRemoveFromWatchlist,
}) {
  function isContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  const isAdded = isContain(movie);

  const handleWatchlist = (e) => {
    e.stopPropagation();
    if (isAdded) {
      handleRemoveFromWatchlist(movie);
    } else {
      handleAddtoWatchlist(movie);
    }
  };

  return (
    <div
      onClick={handleWatchlist}
      className="absolute top-2 right-2 z-10 bg-slate-900/60 p-1 rounded-lg hover:scale-110 duration-200 cursor-pointer hover:bg-slate-900/80"
    >
      <span className="text-xl">{isAdded ? "❤️" : "⭐"}</span>
    </div>
  );
}

export default WatchListButton;
