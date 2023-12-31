import React, { useState } from "react";
import "./MovieSearch.css";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import Nav from "../Nav";
export default function MovieSearch() {
  // eslint-disable-next-line
  const { state } = useLocation();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchMovie, setSearchMovie] = useState("");
  const [moviesAvailable, setMoviesAvailable] = useState(true);

  let loopNumber = 1;
  let fetchedMovies = [];
  async function FetchMovies() {
    for (let i = 0; i <= loopNumber; i++) {
      if (searchMovie === "") {
        alert("Type something");
        return;
      }
      setLoading(true);
      var { data } = await axios
        .get(
          `https://www.omdbapi.com/?apikey=59e995b1&s=${searchMovie}&page=${i}`
        )
        .catch((error) => console.log(error));
      if (data.Search) {
        const filteredMovies = data.Search.filter(
          (movie) => movie.Type !== "game" && movie.Poster !== "N/A"
        );
        loopNumber = Math.round(data.totalResults / 10);
        if (loopNumber === 0) {
          loopNumber += 1;
        } else if (loopNumber >= 10) {
          loopNumber = 10;
        }
        fetchedMovies.push(...filteredMovies);
        setMovies(fetchedMovies);
        setMoviesAvailable(true);
      } else {
        setMovies([]);
      }
      setLoading(false);
    }
    if (!data.Search) {
      setMoviesAvailable(false);
    }
  }

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      FetchMovies();
    }
  };
  return (
    <>
      <Nav />
      <section className="movieSearch">
        <div className="search__input">
          <div className="search__input--wrapper">
            <label>Netflix Search</label>
            <div className="search__form">
              <input
                type="text"
                value={searchMovie}
                placeholder="Movie Name"
                onChange={(event) => setSearchMovie(event.target.value)}
                onKeyUp={searchEnter}
              />
              <button onClick={() => FetchMovies(searchMovie)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="1em"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="movies__wrapper">
          <div className="movies">
            {!moviesAvailable ? (
              <h1 className="search__notFound">
                Sorry, we could not find the results you are looking for.
              </h1>
            ) : loading ? (
              movies.map((elem) => (
                <div className="loading__wrapper">
                  <div className="loading"></div>
                </div>
              ))
            ) : (
              movies.map((movie) => (
                <div className="movie__wrapper">
                  <Link
                    to={`/search/${movie.imdbID}`}
                    state={{ title: searchMovie }}
                  >
                    <div className="movie">
                      <img src={movie.Poster} alt="" />
                      <h4>{movie.Year}</h4>
                      <h1 className="movie__title">{movie.Title}</h1>
                      <h2>
                        {movie.Type.charAt(0).toUpperCase() +
                          movie.Type.slice(1)}
                      </h2>
                    </div>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
