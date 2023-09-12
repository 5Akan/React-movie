import React from 'react';
import { useState,useEffect } from 'react';

import { useParams } from 'react-router-dom';

export const Details = () => {
    const[details,setDetails] = useState({});
    const id = useParams();
    useEffect(() =>{

       
  
        fetchMovieDetailbyId();
        const fetchMovieDetailbyId = () =>{
        
            fetch(`https://api.themoviedb.org/3/movie/${id}?&api_key=04c35731a5ee918f014970082a0088b1?language=en-US`)
            .then(res=>res.json())
            .then(data=>console.log(data))
        }
        
    },[])
    
  
    
    return(
       <h1>Movie Details Page</h1>
    );
 
      }
    
  
 