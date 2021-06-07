import axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const getPopularMovies = (cityID) => {
  const request = axios.get(
    "https://api.themoviedb.org/3/trending/all/day?api_key=430f826e807233e21fff30e2c309d7a8"
  );
  return request.then((response) => response.data);
};

export default { getPopularMovies };
