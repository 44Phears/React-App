import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Movie data provided by{" "}
        <strong>
          <a
            href="https://www.themoviedb.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            TMDB
          </a>
        </strong>
      </p>
      <div className="tmdb-logo-slot">
        <img src="src/components/images/blue_long.svg" alt="TMDB Logo" />
      </div>
      
      <p>Made by Gavin Heppler</p>
    </footer>
  );
};

export default Footer;