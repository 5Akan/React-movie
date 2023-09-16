import React from 'react'
import { useEffect, useState } from 'react';
import { MovieCard } from './MovieCard';

 const Home = () => {
    const APIURL = 'https://api.themoviedb.org/3/movie/top_rated?&api_key=04c35731a5ee918f014970082a0088b1';
    const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='
    
    const[movies,setMovies] = useState([]);
     const[term,setTerm] = useState('');
     const [isPending,setIsPending] = useState(true);
     const [isPendings,setIsPendings] = useState(true);
     const [error,setError] = useState(null);
     const [color,setColor] = useState('rgb(29, 241, 142');

   
    useEffect(() =>{
        setIsPending(true)
        setIsPendings(false)
         fetch(APIURL).
         then(res=>{
          if (!res.ok) {
            throw Error('Couldnt fetch our data');
          }
          return res.json()
        })
         .then(data=>{setMovies(data.results);setIsPending(false);console.log(data.results)}).
         catch(err=>{
          setIsPending(false);
          setError(err.message);
      })
       },[])
       console.log('Working')
      

    const handleSearch = (e) =>{
        setIsPendings(true)
          e.preventDefault();
          setTimeout(()=>{
            fetch(SEARCHAPI + term).
            then(res=>{
              if (!res.ok) {
                throw Error('Couldnt fetch our data')
              }
              return res.json()
            }
              ).then(data=>{setMovies(data.results);setIsPendings(false)}).
            catch(err=>{
              setIsPendings(false);
                setError(err.message);
            })
            
            
          },1000)
       }
       const toggleColor=()=>{
        setColor(color == "rgb(29, 241, 142)"?"Yellow":"rgb(29, 241, 142)")
      }
     
  return (

    <div className="App" style={{backgroundColor:color}}> 
    <button onClick={toggleColor} className = "button">Favorite</button>
        <div className='searchNav'>
          <div className='title'>
            <h1>
              Movies
            </h1>
          
          </div>

          <div>
    
            <form onSubmit={handleSearch}>
              <input onChange={(e)=>setTerm(e.target.value)}/>
            
              <button className='search'>Search</button>
            
              {isPending&& <div>Loading...</div>}
              {isPendings&& <div>Loading search...</div>}
              {error&& <div>{error}</div>}
              
            </form>
          </div>
        </div>

        <div className='movies'>
          {movies.slice(0,10).map((movie)=>
            <MovieCard key ={movie.id}
             poster_path = {movie.poster_path}
              id = {movie.id}
              title = {movie.title}
              release_date= {movie.release_date}
              overview ={movie.overview}
              vote_average ={movie.vote_average} 
              runtime={movie.runtime}/>)
          }
        </div>
  </div>

  )
}
export default Home