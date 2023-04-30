import Card from './Card';
import './CardList.css';


function CardList({movieList,onMovieSelect}) {
  return (
    <div className='card-list'>
                 {movieList?.length ? (
          movieList.map((movie, index) => (
            <Card
              key={index}
              movie={movie}
              onMovieSelect={onMovieSelect}
            />
          ))
        ) : (
            <div>Search something to display</div>
        )}
            </div>
  )
}

export default CardList;