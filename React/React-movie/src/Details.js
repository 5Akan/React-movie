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
         //  How to do a .amv file
         //React Router version 6
         //Crash course travesy,webdev
         //Free code camp
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
       <h1>{details.title}</h1>
       <p className='release'>Release Date: {details.release_date}</p>
       <p className='vote'>Rating: {details.vote_average}</p>
          <img src= {IMGPATH + details.poster_path}/>
          <p className='tagline'> {details.tagline}</p>
         
          <div className='over'>
             <h3>Details</h3>
          {details.overview}
          </div>
       </div>

    );
 
      }
    
  
 