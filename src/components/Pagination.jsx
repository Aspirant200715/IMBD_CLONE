import React from 'react'
import { useState } from 'react';

function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center items-center gap-6 mt-10 pb-10">  
      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        className="bg-slate-800 px-5 py-2 rounded hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
      >
        Previous
      </button>

      <span className="text-lg font-semibold">
        {page}
      </span>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-500 transition font-semibold"
      >
        Next
      </button>

    </div>
  
  );
}

export default Pagination;