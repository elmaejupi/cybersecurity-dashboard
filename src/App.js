import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResourceCard from "./components/ResourceCard";
import resources from "./data/resources.json";

function App() {
  //this part manages the themes, filtering, and the search logic
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const filteredResources = resources.filter((r) => {
    const matchesCategory = filter ? r.category === filter : true;
    const matchesSearch = searchQuery
      ? r.title.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCategory && matchesSearch;
  });

  return (
     // build the main page layout that is header, search bar, and resource cards, styled with light and dark mode
    <div className="min-h-screen bg-slate-50 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Header toggleTheme={toggleTheme} theme={theme} />
      <SearchBar setFilter={setFilter} setSearchQuery={setSearchQuery} />

      <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </main>
    </div>
  );
}

export default App;
