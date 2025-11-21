import React, { useState, useEffect } from "react";
import "./PopularList.css";
import MovieCard from "./MovieCard.jsx";

const PopularList = () => {
  //State Variable
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //custom function that will get the movies from TMDB
    fetchMovies();
  });

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=452fd67628578f1d77f42246ec5c8b56"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };

  return (
    <div className="Popular_grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default PopularList;
