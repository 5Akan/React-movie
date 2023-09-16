  
import { Link } from 'react-router-dom';
import './MovieCard.css'
const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';

export const MovieCard = (props) => {
  
  return (
    <Link to={`/details/${props.id}`}>
        
    <div className='card' key = {props.id} data-testid = "movie-card">
        <div className='poster'>
            <img src={IMGPATH + props.poster_path} data-testid = "movie-poster"/>
        </div>
        <div className='info' >
            <p className='title' data-testid = "movie-title">{props.title} </p>
            <p className='releaseDate' data-testid = "movie-release-date">{props.release_date}</p>
           
        </div>
    </div>
    </Link>
  )
}
