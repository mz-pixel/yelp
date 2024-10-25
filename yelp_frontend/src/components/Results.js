import React from "react";
import StarRatings from "react-star-ratings";
import "../styles/Results.css";

const Results = ({ results, term, location }) => {
  return (
    <div className="Results">
      <div className="container">
        <h3>
          Here are the top 25 businesses for {term} in{" "}
          {location}
        </h3>
        <div className="cards-container">
          {results.map((business) => (
            <div key={business.id} className="card">
              {business.image_url && (
                <img
                  src={business.image_url}
                  alt={business.name}
                  className="card-img"
                />
              )}
              <div className="card-content">
                <h4 className="card-title">{business.name}</h4>
                <StarRatings
                  rating={business.rating}
                  starRatedColor="gold"
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                />
                <p>Phone: {business.display_phone}</p>
                <p>Address: {business.location.display_address.join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Results;
