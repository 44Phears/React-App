import React from "react";
import "./Home.css";

const Home = () => {
  return <div className="home-container">
  <h1>Welcome to My Movie Listings Project</h1>

  <p>
    This website was created as part of my <strong>Programming Rich Media
    Applications</strong> course. The goal of the project is to learn how to
    build modern, interactive web applications using <strong>React</strong>.
  </p>

  <p>
    The site displays different categories of movies, such as “Now Playing”
    and “Popular”, by making live data requests to an external movie database.
    For this project, I am using the 
    <strong> The Movie Database (TMDB) API</strong>.
  </p>

  <p>
    The TMDB API allows developers to fetch up-to-date information about films,
    including titles, posters, descriptions, and release dates. Using React, I
    load this movie data dynamically and display it in custom-designed card 
    components throughout the website.
  </p>

  <h2>Data Attribution</h2>
  <p>
    All movie information, including images and descriptions, is provided by 
    <strong> The Movie Database (TMDB)</strong>.  
    This product uses the TMDB API but is not endorsed or certified by TMDB.
  </p>
</div>

};

export default Home;
