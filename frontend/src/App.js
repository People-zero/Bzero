import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React,{useEffect, useReducer,useRef, useState} from 'react';
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

  const init = () => {
    axios.get("http://127.0.0.1:8000/store/clean_store/")
    .then((response) => {
    dispatch({type:"INIT",data:response});
  })
    if (data.lengh<1){
      dispatch({type:"INIT",data:dummyData});
    }
  }

  useEffect(()=>{
    init();
  })

  // console.log(data);

  return (
    <CleanStoreContext.Provider value={data}>
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/store/clean_store' element={<CleanStore />}></Route>
        <Route path='/store/clean_store/:id' element={<CleanStoreDetail />}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    </CleanStoreContext.Provider>
  );
}

export default App;