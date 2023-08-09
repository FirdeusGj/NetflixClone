import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import { Link, NavigationType, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Nav from "../Nav";

export default function MovieInfo() {
  const { id } = useParams();
  const { state } = useLocation();
  const [movie, setMovie] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    const fetchMovie = async () => {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?apikey=59e995b1&i=${id}`
      );
      setMovie(data);
    };
    fetchMovie();
  }, [id]);
  const fetchSimilarMovies = async (name) => {
    const { data } = await axios.get(
      `https://www.omdbapi.com/?apikey=59e995b1&s=${name}`
    );
    setSimilarMovies(data.Search);
  };
  useEffect(() => {
    if (state.title) {
      fetchSimilarMovies(state.title);
    }
  }, []);
  const watchMovie = () => {
    alert("This feature is not implemented yet");
  };
  let filteredMovies = similarMovies
    .filter((elem) => elem.imdbID !== id)
    .slice(0, 4);
  return (
    <>
      <Nav />
      <div className="movieInfo__body">
        <div className="movieInfo">
          <div className="info__main">
            <div className="movieInfo__img--wrapper">
              <img src={movie.Poster} className="movieInfo__img" />
            </div>
          </div>
          <div className="movieInfo__description">
            <h1 className="movieInfo__h1">{movie.Title}</h1>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Plot :</span> {movie.Plot}
            </p>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Genre :</span> {movie.Genre}
            </p>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Year :</span> {movie.Year}
            </p>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Released on : </span>
              {movie.Released}
            </p>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Runtime :</span> {movie.Runtime}
            </p>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Writer :</span> {movie.Writer}
            </p>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Language :</span>{" "}
              {movie.Language}
            </p>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Country :</span> {movie.Country}
            </p>
            <p className="movieInfo__para">
              <span className="movieInfo__span">Rating :</span>{" "}
              {movie.imdbRating}
            </p>
            <div className="movieInfo__buttons">
              <button onClick={watchMovie} className="movieInfo__button">
                Watch
              </button>
              <Link to="/search" className="movieInfo__link">
                <button className="movieInfo__button--link">
                  Back to search
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="movieInfo__similar">
          <h1>Similar shows</h1>
          <div className="similar__wrapper">
            {filteredMovies.map((recommend) => (
              <>
                <div className="similar__movies" key={recommend.imdbID}>
                  <Link
                    className="similar__link"
                    to={`/search/${recommend.imdbID}`}
                    state={{ title: recommend.title || state.query }}
                    key={recommend.imdbID}
                  >
                    <img
                      src={recommend.Poster}
                      alt=""
                      className="similar__img"
                    />
                    <h4>{recommend.Year}</h4>
                    <h1 className="similar__title">{recommend.Title}</h1>
                    <h2>
                      {recommend.Type.charAt(0).toUpperCase() +
                        recommend.Type.slice(1)}
                    </h2>
                  </Link>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
