import LoginPage from './LoginPage';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    
    
      
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        
      </Routes>
      
      </BrowserRouter>



      
    
    
  );
}

export default App