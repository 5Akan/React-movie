 
import { Link } from 'react-router-dom';
import './MovieCard.css'
const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';
export const MovieCard = (props) => {
  return (
    <div className='card'>
        <div className='poster'>
            <img src={IMGPATH + props.poster_path}/>
        </div>
        <div className='info' >
            <p className='title'>{props.title}</p>
            <p className='releaseDate'>{props.release_date}</p>
            
        </div>
        <div className='overview' >
            <Link to={`/details/${props.id}`}>
                Details
            </Link>
            <h2 className='title_overview'>Overview</h2>
            <h3 className='overview_info'>{props.overview}</h3>
        </div>
    </div>
  )
}
