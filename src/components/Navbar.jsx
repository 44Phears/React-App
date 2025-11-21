import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/Popular">Popular</a>
        </li>
        <li>
          <a href="/NowPlaying">Now Playing</a>
        </li>
        <li>
          <a href="/Concesion">Concesion</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
