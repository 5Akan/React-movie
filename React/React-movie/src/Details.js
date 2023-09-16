import React from 'react';
import './Details.css'

import { useState,useEffect } from 'react';

import { useParams } from 'react-router-dom';
const IMGPATH = 'https://image.tmdb.org/t/p/w1280/';
export const Details = () => {
    const[details,setDetails] = useState({});
    const [isPending,setIsPending] = useState(true);
    const {id} = useParams();
    useEffect(() =>{
      setIsPending(true)
        const fetchMovieDetailbyId = () =>{
        
         const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZjVmODJiMWNlMjA3NDNlMDAzMmI3ZDg3N2ZmMjBmZCIsInN1YiI6IjY1MDA2YmNjZmZjOWRlMGVkZWQ0MzJmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RgJJVCPuJuMzSqCh_esnCWfHRDADzTynhvUsx3jkaHI'
            }
          };
          fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
            .then(response => response.json())
         .then(response =>{setDetails(response);setIsPending(false);})
            .catch(err => console.error(err));
        }
        fetchMovieDetailbyId();
        
    },[id])
    console.log(details);
    

    return(
      <div>
       <h1 data-testid = "movie-title">{details.title}</h1>
       <p className='release' data-testid = "movie-release-date">{details.release_date}</p>
       <img src= {IMGPATH + details.poster_path} />
          <p className='tagline' data-testid = "movie-runtime"> {details.runtime}</p>
         
          <div className='over' data-testid = "movie-overview">
          {details.overview}
          </div>
       </div>

    );
 
      }
    
  
 