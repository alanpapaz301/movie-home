import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav";
import MovieList from "./components/MovieList";
import MovieInfo from "./components/MovieInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/Movie">
            <MovieInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
