import React from "react";
import "./Genres.scss";
import { Link } from "react-router-dom";

const Genres = () => {
  const genreOptions = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  return (
    <div className="genres-container">
      <div className="genres-grid">
        {genreOptions.map((option, index) => (
          <Link to="/Genres">
            <div className="genre-option">
              <h3 key={index}>{option.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Genres;
