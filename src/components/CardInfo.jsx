import { useEffect, useState } from 'react';
import './CardInfo.css';
import  Axios from 'axios';
import { API_KEY } from "../App";

function CardInfo({selectedMovie,onMovieSelect}) {
    const [movieInfo, setMovieInfo] = useState();

    useEffect(() => {
        Axios.get(
          `https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,
        ).then((response) => setMovieInfo(response.data));
    }, [selectedMovie]);

  return (
    <div className='info-box1'>
        {movieInfo ? (
            <>
            <img src={movieInfo?.Poster} alt={movieInfo?.Title} className='cover-image1'/>

<div className="info-column1">
    <span className="movie-name1">
        {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
    </span>
    <span className="movie-info1">
        IMDB Rating: <span>{movieInfo?.imdbRating}</span>
    </span>
    <span className="movie-info1">
        Year: <span>{movieInfo?.Year}</span>
    </span>
    <span className="movie-info1">
        Language: <span>{movieInfo?.Language}</span>
    </span>
    <span className="movie-info1">
        Rated: <span>{movieInfo?.Rated}</span>
    </span>
    <span className="movie-info1">
        Released: <span>{movieInfo?.Released}</span>
    </span>
    <span className="movie-info1">
        Runtime: <span>{movieInfo?.Runtime}</span>
    </span>
    <span className="movie-info1">
        Genre: <span>{movieInfo?.Genre}</span>
    </span>
    <span className="movie-info1">
        Director: <span>{movieInfo?.Director}</span>
    </span>
    <span className="movie-info1">
        Actors: <span>{movieInfo?.Actors}</span>
    </span>
    <span className="movie-info1">
        Plot: <span>{movieInfo?.Plot}</span>
    </span>
    <span className="close"
    onClick={() => onMovieSelect()}>X</span>
</div>
            </>
        ): (
        "Loading..."
      )}
    </div>
  )
}

export default CardInfo;