import React, { useEffect, useState } from "react";
import "./MovieSearch.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Nav from "../Nav";
import notFound from "../assets/NotFound.png";
export default function MovieSearch() {
  const { state } = useLocation();
  const [movies, setMovies] = useState([]);
  // eslint-disable-next-line
  const [loading, setLoading] = useState(false);
  const [searchMovie, setSearchMovie] = useState("");
  const [moviesAvailable, setMoviesAvailable] = useState(true);
  async function FetchMovies(query) {
    setLoading(true);
    const { data } = await axios
      .get(
        `https://www.omdbapi.com/?apikey=59e995b1&s=${
          searchMovie || query
        }&page=1`
      )
      .catch((error) => console.log(error));
    if (data.Search) {
      const filteredMovies = data.Search.filter(
        (movie) => movie.Type !== "game" && movie.Poster !== "N/A"
      );
      setMovies(filteredMovies);
      setMoviesAvailable(true);
    } else {
      setMoviesAvailable(false);
      setMovies([]);
    }
    setLoading(false);
  }
  useEffect(() => {
    if (state && state.query) {
      FetchMovies(state.query);
    }
    // eslint-disable-next-line
  }, []);

  const searchEnter = (e) => {
    if (e.key === "Enter") {
      FetchMovies();
    }
  };
  // #e50914
  return (
    <>
      <Nav />
      <section className="movieSearch">
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <h1>test</h1>
        <div className="search__input">
          <input
            type="text"
            value={searchMovie}
            placeholder="Movie Name"
            onChange={(event) => setSearchMovie(event.target.value)}
            onKeyUp={searchEnter}
          />
          <button onClick={() => FetchMovies(searchMovie)}>Search</button>
        </div>
        <div className="movies__wrapper">
          <div className="movies">
            {!moviesAvailable ? (
              <img className="search__notFound" src={notFound} alt="" />
            ) : loading ? (
              <h1> Loading...</h1>
            ) : (
              movies.slice(0, 9).map((movie) => (
                <div className="movie__wrapper">
                  <div className="movie">
                    <img src={movie.Poster} alt="" />
                    <h4>{movie.Year}</h4>
                    <h1 className="movie__title">{movie.Title}</h1>
                    <h2>{movie.Type}</h2>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
