import React, { useState, useEffect } from "react";
import "./MovieInfo.scss";
import movieService from "../../services/movies";

const MovieInfo = () => {
  const [movie, setMovie] = useState("");

  //Carrega as informações de um filme aleatorio entre os resultados mais populares
  const getMovie = () => {
    let randomPage = Math.floor(Math.random() * 500);
    movieService.getPopularMovies(randomPage).then((data) => {
      let randomMovieIndex = Math.floor(Math.random() * data.results.length);
      setMovie(data.results[randomMovieIndex]);
      console.log(data.results[randomMovieIndex]);
    });
  };

  useEffect(() => {
    getMovie();
  }, []);

  if (movie !== "") {
    return (
      <div className="movieDetails">
        <h1>
          {movie.hasOwnProperty("title") ? movie.title : movie.name}(
          {movie.release_date.substring(0, 4)})
        </h1>
        <button onClick={() => getMovie()}>Mostre-me outro filme!</button>
        <div className="img_overview">
          <img
            className="big_poster"
            src={
              movie.poster_path != null
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
            }
            alt="Imagem não disponível"
          ></img>
          <p>
            {movie.overview !== ""
              ? movie.overview
              : "Descrição não disponível"}
          </p>
        </div>
      </div>
    );
  } else
    return (
      <div>
        <h1 className="loading">Loading..</h1>;
      </div>
    );
};
export default MovieInfo;
