import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage';
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage/>}/>
      </Routes>

    </div>
  );
}

export default App;



