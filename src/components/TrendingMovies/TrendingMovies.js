import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./TrendingMovies.scss";
import movieService from "../../services/movies";

const TrendingMovies = () => {
  const [movieList, setMovieList] = useState(null);

  //Carregamento dos 20 filmes mais populares utilizando a API Discover
  const setPopularMovies = () => {
    movieService.getPopularMovies(1).then((data) => {
      setMovieList(data);
    });
  };

  useEffect(() => {
    setPopularMovies();
  }, []);

  //Condicional para renderização somente após o carregamento de dados da API
  const Render = () => {
    if (movieList != null && movieList.results.length > 0) {
      return (
        <>
          <div className="movies-container">
            <h2>Top 20 Filmes mais populares do momento</h2>
            <div className="movies-grid">
              {movieList.results.map((movie, index) => (
                <div key={index} className="gridElement">
                  <h3 className="movieTitle">
                    {movie.hasOwnProperty("title") ? movie.title : movie.name}
                  </h3>
                  <img
                    className="poster"
                    src={
                      movie.poster_path != null
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                    }
                    alt="No Poster available"
                  ></img>
                  <Link to={`Movie/${movie.id}`}>
                    <button className="details-btn">Detalhes</button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    } else
      return (
        <div>
          <h1 className="loading">Loading..</h1>;
        </div>
      );
  };
  return (
    <>
      <Render />
    </>
  );
};
export default TrendingMovies;
