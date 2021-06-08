import React, { useState, useEffect } from "react";
import "../App.scss";
import movieService from "../services/movies";

const MovieInfo = () => {
  const [movie, setMovie] = useState("");

  const getMovie = () => {
    movieService.getPopularMovies().then((data) => {
      console.log("dd", data.results[0]);
      let random = Math.floor(Math.random() * data.results.length);
      setMovie(data.results[random]);
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (movie != "") {
    return (
      <div className="movieDetails">
        <h1>{movie.hasOwnProperty("title") ? movie.title : movie.name}</h1>
        <div className="img_overview">
          <img
            className="big_poster"
            src={
              movie.poster_path != null
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            }
            alt="No Image available"
          ></img>
          <p>{movie.overview}</p>
        </div>
      </div>
    );
  } else return <h1>No data</h1>;
};
export default MovieInfo;
