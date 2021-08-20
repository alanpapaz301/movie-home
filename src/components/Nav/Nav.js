import "./Nav.scss";
import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <nav className="nav-links">
        <h1>MovieHome</h1>
        <ul>
          <li>
            <Link to="/">Trending</Link>
          </li>
          <li>
            <Link to="/Genres">Navegar por genero</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Nav;
