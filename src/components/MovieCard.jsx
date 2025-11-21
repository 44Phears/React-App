import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div class="movie_card" id="card">
        <div class="info_section">
          <div class="movie_header">
            <img
              class="locandina"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="MoviePoster"
            />
            <h1>{movie.title}</h1>
            <h4>{movie.release_date}</h4>
          </div>
          <div class="movie_desc">
            <p class="text">{movie.overview.slice(0, 125) + "..."}</p>
          </div>
          <div class="movie_social">
            <ul>
              <li>
                <i class="material-icons">share</i>
              </li>
              <li>
                <i class="material-icons">like</i>
              </li>
              <li>
                <i class="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div class="blur_back card_back"></div>
      </div>

      <img />
      <h3>{movie.title}</h3>
      <p>{movie.overview.slice(0, 125) + "..."}</p>
      <p>{movie.release_date}</p>
    </div>
  );
};

export default MovieCard;
