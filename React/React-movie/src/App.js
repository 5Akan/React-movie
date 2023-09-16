import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom";
// import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import { Details } from './Details';
import React from 'react';
const router = createBrowserRouter(
  createRoutesFromElements(

    <React.Fragment>
      <Route path='/' element = {<Home/>}/>
      <Route path='/details/:id' element = {<Details/>}/>
    </React.Fragment>
  )
);

function App() {
  

   
//   const click = color =>{
//     setColor(color)
// }
// useEffect(()=>{
//     document.body.style.backgroundColor = color;
// },[color])


  return(
    <div>
       
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
    </div>
  )
  
}

export default App;
