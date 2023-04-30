import './Card.css';

function Card({movie,onMovieSelect}) {
  return (
    <div 

      className="card"
      onClick={() => {
        onMovieSelect(movie.imdbID);
        window.scrollTo({ top: 250, behavior: "smooth" });
      }}
    >
    
        <img src={movie.Poster} alt={movie.Title} className='cover-image'/>

        <span className='movie-name'>{movie.Title}</span>

        <div className="info-column">
            <span className="movie-info">Year: {movie.Year}</span>
            <span className="movie-info">Type: {movie.Type}</span>
        </div>
    </div>
  )
}

export default Card