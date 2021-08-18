import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const getPopularMovies = (page) => {
  const request = axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`
  );
  return request.then((response) => response.data);
};
const getMovieById = (movie_id) => {
  const request = axios.get(
    `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=pt-BR`
  );
  return request.then((response) => response.data);
};

export default { getPopularMovies, getMovieById };
