import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const getPopularMovies = () => {
  const request = axios.get(
    "https://api.themoviedb.org/3/discover/movie?api_key=430f826e807233e21fff30e2c309d7a8&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );
  return request.then((response) => response.data);
};

const searchMovie = (movieName) => {
  console.log("func", movieName);
  const request = axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=430f826e807233e21fff30e2c309d7a8&language=en-US&query=${movieName}&page=1&include_adult=false`
  );
  return request.then((response) => response.data);
};

export default { getPopularMovies, searchMovie };
