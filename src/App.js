import React, { useState } from "react";
import resourcesData from "./data/resources.json";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import ResourceCard from "./components/ResourceCard";

function App() {
  const [filter, setFilter] = useState("");
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const filteredResources = filter
    ? resourcesData.filter((r) => r.category === filter)
    : resourcesData;

  return (
    <div className={theme === "light" ? "bg-gray-100 min-h-screen" : "bg-gray-900 text-white min-h-screen"}>
      <Header toggleTheme={toggleTheme} theme={theme} />
      <SearchBar setFilter={setFilter} />
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredResources.map((res) => (
          <ResourceCard key={res.id} resource={res} />
        ))}
      </div>
    </div>
  );
}

export default App;
