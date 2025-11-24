import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Popular">Popular</Link>
        </li>
        <li>
          <Link to="/NowPlaying">Now Playing</Link>
        </li>
        <li>
          <Link to="/Concesion">Concesion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
