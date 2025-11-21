import React, { useState, useEffect } from "react";
import "./NowPlayingList.css";
import MovieCard from "./MovieCard.jsx";

const NowPlayingList = () => {
  //State Variable
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //custom function that will get the movies from TMDB
    fetchMovies();
  });

  const fetchMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=452fd67628578f1d77f42246ec5c8b56"
    );

    const data = await response.json();

    console.log(data);

    setMovies(data.results);
  };

  return (
    <div className="NowPlaying_grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default NowPlayingList;
