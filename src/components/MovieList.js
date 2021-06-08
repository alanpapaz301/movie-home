import React, { useState, useEffect } from "react";
import "../App.scss";
import movieService from "../services/movies";
import Filter from "./Filter";

const MovieList = () => {
  const [filter, setFilter] = useState("");
  const [movieList, setMovieList] = useState(null);

  const setPopularMovies = () => {
    movieService.getPopularMovies().then((data) => {
      console.log(data);
      setMovieList(data);
    });
  };

  const searchMovies = (movieName) => {
    movieService.searchMovie(movieName).then((data) => {
      console.log(data);
      setMovieList(data);
    });
  };

  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setFilter(event.target.value);
    searchMovies(event.target.value);
  };

  useEffect(() => {
    setPopularMovies();
  }, []);

  const Render = () => {
    if (movieList != null && movieList.results.length > 0) {
      return (
        <>
          <div className="movies-container">
            <h2>Top 20 Filmes mais populares do momento</h2>
            <div className="movies-grid">
              {movieList.results.map((movie, index) => (
                <div>
                  <h3 className="movieTitle">
                    {movie.hasOwnProperty("title") ? movie.title : movie.name}
                  </h3>
                  <img
                    className="poster"
                    src={
                      movie.poster_path != null
                        ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
                        : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    }
                    alt="No Image available"
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    } else
      return (
        <div>
          <h1 className="loadingList">Loading..</h1>;
        </div>
      );
  };
  return (
    <>
      <Render />
    </>
  );
};
export default MovieList;
