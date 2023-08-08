import React, { useEffect, useState } from "react";
import "./MovieInfo.css";
import { Link, useLocation, useParams } from "react-router-dom";
import axios from "axios";

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
  return (
    <div>
      <div className="movieinfo__image">
        <img src={movie.Poster} className="movieinfo__img" />
      </div>
      <div className="movieinfo__description">
        <h1 className="movieinfo__h1">Title : {movie.Title}</h1>
        <h2 className="movieinfo__h2">About :</h2>
        <p className="movieinfo__para">Plot : {movie.Plot}</p>
        <p className="movieinfo__para">Genre : {movie.Genre}</p>
        <p className="movieinfo__para">Year : {movie.Year}</p>
        <p className="movieinfo__para">Released on : {movie.Released}</p>
        <p className="movieinfo__para">Runtime : {movie.Runtime}</p>
        <p className="movieinfo__para">Writer : {movie.Writer}</p>
        <p className="movieinfo__para">Language : {movie.Language}</p>
        <p className="movieinfo__para">Country : {movie.Country}</p>
        <p className="movieinfo__para">Rating : {movie.imdbRating}</p>
      </div>
      <div>
        {similarMovies
          .filter((elem) => elem.imdbID !== id)
          .slice(0, 4)
          .map((recommend) => (
            <Link
              to={`/search/${recommend.imdbID}`}
              state={{ title: recommend.title || state.query }}
              key={recommend.imdbID}
            >
              <div className="similar__movies" key={recommend.imdbID}>
                <img src={recommend.Poster} alt="" className="similar__img" />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
