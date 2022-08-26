import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React,{useEffect, useReducer,useRef, useState} from 'react';
import CleanStoreDetail from './CleanStoreDetail';
import CleanStore from './CleanStore';
import axios from 'axios';
import { dummyData } from './util/dummyData';
import { dummyReview } from './util/dummyReview';

const reducer=(state,action)=>{
  switch(action.type){
    case 'INIT':{
      return action.data;
    }
    default: return state;
  }
};

export const CleanStoreContext = React.createContext();
// export const CleanStoreReview = React.createContext();

function App() {

  const [data,dispatch]=useReducer(reducer,dummyData);
  // const [review, setReview]=useState([dummyReview]);
  const dataId= useRef(10);

  return (
    <CleanStoreContext.Provider value={data}>
      {/* <CleanStoreReview.Provider value={review}> */}
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/store/clean_store' element={<CleanStore />}></Route>
        <Route path='/store/clean_store/:id' element={<CleanStoreDetail />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
      {/* </CleanStoreReview.Provider> */}
    </CleanStoreContext.Provider>
  );
}

export default App;