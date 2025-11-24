import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const bgImg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
  console.log(bgImg);
  return (
    <div>
      <div
        className="movie_card"
        id="card"
        style={{
          backgroundImage:
            "https://image.tmdb.org/t/p/w500//tc7RrVW5FGvyO2tsgW6LIN1esHI.jpg",
        }}
      >
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt="MoviePoster"
            />
            <h1>{movie.title}</h1>
            <h4>{movie.release_date}</h4>
          </div>
          <div className="movie_desc">
            <p className="text">{movie.overview.slice(0, 125) + "..."}</p>
          </div>
          <div className="movie_social">
            <ul>
              <li>
                <i className="material-icons">share</i>
              </li>
              <li>
                <i className="material-icons">like</i>
              </li>
              <li>
                <i className="material-icons">chat_bubble</i>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="blur_back card_back"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie.poster_path})`,
          }}
        ></div>

        <img />
        <h3>{movie.title}</h3>
        <p>{movie.overview.slice(0, 125) + "..."}</p>
        <p>{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;
