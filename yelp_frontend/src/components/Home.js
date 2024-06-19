import React, { useState } from "react";
import "../styles/Home.css";

const Home = ({ onSearch }) => {
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term, location);
  };

  return (
    <div className="Home">
      <div className="container">
        <h1>Welcome to my Yelp Clone Website</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="location"
            placeholder="City Name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <input
            type="text"
            name="term"
            placeholder="Type of Business"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
