import React from 'react';
import Header from './Header';
import RVideos from './RVideos';
import Sidebar from './Sidebar';
import './App.css';

import {BrowserRouter, Route, Routes} from "react-router-dom";



function App() {
  return (
    <div className="app"> 
     <BrowserRouter>
      <Header/>
      
      <Routes>
      <Route path='/search/:searchTerm' element={<div className='screen_page'>
        <Sidebar/>
      
      </div>}/>
        <Route path='/' element={
      <div className='screen_page'>
        <Sidebar/>
        <RVideos/>
      </div>}/>
      </Routes>
      </BrowserRouter> 
       


  
    </div>
  );
}

export default App;
