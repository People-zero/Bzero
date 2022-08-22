import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React,{useReducer,useRef} from 'react';
import CleanStoreDetail from './CleanStoreDetail';
import CleanStore from './CleanStore';
import axios from 'axios';
import { dummyData } from './util/dummyData';

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

  const [data,dispatch]=useReducer(reducer,dummyData);
  const dataId= useRef(10);

  return (
    <CleanStoreContext.Provider value={data}>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/cleanstore' element={<CleanStore />}></Route>
        <Route path='/cleanstore/:id' element={<CleanStoreDetail />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </CleanStoreContext.Provider>
  );
}

export default App;