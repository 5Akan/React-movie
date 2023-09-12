import { useEffect, useState } from 'react';
import './App.css';
import { MovieCard } from './MovieCard';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { Details } from './Details';


function App() {

const APIURL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const SEARCHAPI = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

const[movies,setMovies] = useState([]);
 const[term,setTerm] = useState('');
 

 useEffect(() =>{
   fetch(APIURL).then(res=>res.json()).then(data=>setMovies(data.results))
 },[])

 console.log(movies);
 const handleSearch = (e) =>{
    e.preventDefault();
    fetch(SEARCHAPI + term).then(res=>res.json()).then(data=>setMovies(data.results))
 }
  return (
    <Router>
      <Switch>
        <Route exact path ="/">
        <div className="App"> 
        <div className='searchNav'>
          <div className='title'>
            <h1>
              Movies
            </h1>
          </div>

          <div>
            <form onSubmit={handleSearch}>
              <input onChange={(e)=>setTerm(e.target.value)}/>
              <button>Search</button>
            </form>
          </div>
        </div>

        <div className='movies'>
          {movies.map((movie)=>
            <MovieCard {...movie}/>
          )}
        </div>
      </div>
        </Route>
        <Route path = "/details/:id" element = {<Details />}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
