import React, { useState, useEffect } from "react";
import "../App.scss";
import movieService from "../services/movies";

const MovieList = () => {
  const [movieList, setMovieList] = useState(null);

  const setMovies = () => {
    movieService.getPopularMovies().then((data) => {
      console.log(data);
      setMovieList(data);
    });
  };

  useEffect(() => {
    setMovies();
  }, []);

  if (movieList != null) {
    return (
      <div className="movies-grid">
        {movieList.results.map((movie, index) => (
          <div>
            <h3>{movie.hasOwnProperty("title") ? movie.title : movie.name}</h3>
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            ></img>
          </div>
        ))}
      </div>
    );
  } else return <h1>No Data</h1>;
};
export default MovieList;
