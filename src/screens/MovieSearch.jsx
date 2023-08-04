import React, { useEffect, useState } from "react";
import "./MovieSearch.css";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Nav from "../Nav";

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
      .get(`https://www.omdbapi.com/?apikey=59e995b1&s=${searchMovie || query}`)
      .catch((error) => console.log(error));
    if (data.Search) {
      setMovies(data.Search);
      setMoviesAvailable(true);
    } else {
      setMoviesAvailable(false);
      setMovies([]); // Clear the movie list if no results are found
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
  return (
    <>
    <Nav/>
    <div>
      <input
        type="text"
        value={searchMovie}
        placeholder="Movie Name"
        onChange={(event) => setSearchMovie(event.target.value)}
        onKeyUp={searchEnter}
        />
      <button onClick={() => FetchMovies(searchMovie)}>Search</button>
      </div>
      {!moviesAvailable ? (
        <h1>no movies found</h1>
      ) : loading ? <h1> Loading...</h1> : (
        movies.slice(0, 9).map((movie) => (
          <div className="movie">
            <h1 className="movie__title">{movie.Title}</h1>
          </div>
        ))
      )}
    </>
  );
}