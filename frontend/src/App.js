import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React,{useReducer} from 'react';
import CleanStoreDetail from './CleanStoreDetail';
import CleanStore from './CleanStore';

const env=process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const reducer=(state,action)=>{
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    default: return state;
  }
};

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