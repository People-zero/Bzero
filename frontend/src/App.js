
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import CleanStoreDetail from './CleanStoreDetail';
import CleanStore from './CleanStore';

export const CleanStoreContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/cleanstore' element={<CleanStore />}></Route>
        <Route path='/cleanstore/:id' element={<CleanStoreDetail />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App