import React, { useState, useEffect } from "react";
import "../App.scss";
import movieService from "../services/movies";

const MovieInfo = () => {
  const [movie, setMovie] = useState("");

  const getMovie = () => {
    movieService.randomMovie().then((data) => {
      console.log("dd", data);
      setMovie(data);
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return <div>{movie.title}</div>;
};
export default MovieInfo;
