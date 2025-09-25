import React from "react";

function Header({ toggleTheme, theme }) {
  return (
    <header className="p-4 flex justify-between items-center bg-blue-600 text-white">
      <h1 className="text-xl font-bold">Cybersecurity Dashboard</h1>
      <button 
        onClick={toggleTheme} 
        className="px-3 py-1 bg-gray-800 text-white rounded"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;
