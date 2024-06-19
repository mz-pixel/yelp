import React, { useState } from "react";
import Home from "./components/Home";
import Results from "./components/Results";
import "./App.css";

const App = () => {
  const [results, setResults] = useState(null);
  const [query, setQuery] = useState({ term: "", location: "" });

  const handleSearch = async (term, location) => {
    setQuery({ term, location });
    try {
      const response = await fetch(
        `http://localhost:4000/api/yelp/search?term=${term}&location=${location}`
      );
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="App">
      {!results ? (
        <Home onSearch={handleSearch} />
      ) : (
        <Results
          results={results}
          term={query.term}
          location={query.location}
        />
      )}
    </div>
  );
};

export default App;
