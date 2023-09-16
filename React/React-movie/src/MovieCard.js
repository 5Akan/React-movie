  
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css'
const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';




export const MovieCard = (props) => {
  
  return (
    <Link to={`/details/${props.id}`}>
        
    <div className='card' key = {props.id}>
        <div className='poster'>
            <img src={IMGPATH + props.poster_path}/>
        </div>
        <div className='info' >
            <p className='title'>{props.title}</p>
            <p className='releaseDate'>{props.release_date}</p>
           
        </div>
        {/* <div className='overview' >
            
            <h2 className='title_overview'>Overview</h2>
            <h3 className='overview_info'>{props.overview}</h3>
        </div> */}
    </div>
    </Link>
  )
}
