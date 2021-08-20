import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/App.scss";
import Nav from "./components/Nav/Nav";
import TrendingMovies from "./components/TrendingMovies/TrendingMovies";
import MovieInfo from "./components/MovieInfo/MovieInfo";
import Genres from "./components/Genres/Genres";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <TrendingMovies />
          </Route>
          <Route exact path="/Movie">
            <MovieInfo />
          </Route>
          <Route exact path="/Movie/:id">
            <MovieInfo />
          </Route>
          <Route exact path="/Genres">
            <Genres />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
