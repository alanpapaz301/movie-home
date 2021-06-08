import "../App.scss";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieList from "./MovieList";
import MovieInfo from "./MovieInfo";

const Header = () => {
  return (
    <Router>
      <div>
        <nav className="nav-links">
          <ul>
            <li>
              <Link to="/">Lista</Link>
            </li>
            <li>
              <Link to="Movie">Detalhes</Link>
            </li>
          </ul>
        </nav>
        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/Movie">
            <MovieInfo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default Header;
