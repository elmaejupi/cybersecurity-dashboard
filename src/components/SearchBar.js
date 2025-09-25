import React from "react";

function SearchBar({ setFilter }) {
  return (
    <div className="p-4">
      <select onChange={(e) => setFilter(e.target.value)} className="p-2 border">
        <option value="">All</option>
        <option value="Web Security">Web Security</option>
        <option value="Networking">Networking</option>
        <option value="CTFs">CTFs</option>
      </select>
    </div>
  );
}

export default SearchBar;
