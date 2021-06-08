import "../App.scss";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="nav-links">
        <h1>MovieList</h1>
        <ul>
          <li>
            <Link to="/">Lista</Link>
          </li>
          <li>
            <Link to="/Movie">Detalhes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
