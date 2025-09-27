import React from "react";

function Header({ toggleTheme, theme }) {
  return (
    <header className="p-4 flex justify-between items-center bg-slate-50 border-b border-slate-200 text-slate-800 dark:bg-gray-900 dark:text-gray-100 dark:border-gray-700">
    <h1 className="text-2xl font-extrabold tracking-wide hover:text-emerald-600 transition-colors duration-300">
    Cybersecurity Dashboard
    </h1>

      <button 
        onClick={toggleTheme} 
        className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-semibold shadow hover:bg-emerald-700 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 transition-all duration-300"
      >
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </header>
  );
}

export default Header;
