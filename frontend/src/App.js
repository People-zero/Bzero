import JoinPage from "./JoinPage";
import LoginPage from './LoginPage';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
function App() {
  return (
   
      
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/main' element={<MainPage></MainPage>}></Route>
      </Routes>
      
      </BrowserRouter>



      
    
    
  );
}

export default App;
