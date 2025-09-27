import React, { useState } from "react";

function SearchBar({ setFilter, setSearchQuery }) {
  const categories = [
    "All",
    "Web Security",
    "Networking",
    "CTFs",
    "Cryptography",
    "Cloud Security",
    "Malware Analysis",
    "General Security"
  ];

  return (
    <div className="p-6 flex flex-col sm:flex-row justify-center items-center gap-4">
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search resources..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-64 px-4 py-2 rounded-full border border-slate-300 dark:border-gray-600 shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
      />

      {/* Category Filter */}
      <select
        onChange={(e) => setFilter(e.target.value)}
        className="px-4 py-2 rounded-full border border-slate-300 dark:border-gray-600 shadow-sm dark:bg-gray-700 dark:text-gray-200 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
      >
        {categories.map((cat, i) => (
          <option key={i} value={cat === "All" ? "" : cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SearchBar;

