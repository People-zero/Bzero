import JoinPage from "./JoinPage";
import LoginPage from './LoginPage';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import MyPage from "./MyPage";
import MapPage from "./MapPage";

import {useReducer,useRef} from 'react';
import CleanStoreDetail from './CleanStoreDetail';
import CleanStore from './CleanStore';
import { dummyData } from './util/dummyData';

import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
const dummy_checked_date = ["2022-08-01", "2022-08-05", "2022-08-13"];
const dummy_badge = [
  { badge_id: 1, badge_type: "badge1.png" },
  { badge_id: 2, badge_type: "badge1.png" },
  { badge_id: 7, badge_type: "badge1.png" },
  { badge_id: 6, badge_type: "badge1.png" },
  { badge_id: 5, badge_type: "badge1.png" },
  { badge_id: 6, badge_type: "badge1.png" },
  { badge_id: 4, badge_type: "badge1.png" },
];
const dummyList = [
  {
    profile: "example_profile.jpg",
    nickname: "닉네임",
    email: "email@email.com",
    point: 4300,
  },
];
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
      <Routes>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/main' element={<MainPage></MainPage>}></Route>
        <Route path='/mypage' element={<MyPage
        user_info={dummyList}
        checked_date={dummy_checked_date}
        badge_info={dummy_badge}
      />}></Route>
      <Route path='/join' element={<JoinPage></JoinPage>}></Route>
      <Route path='/map' element={<MapPage></MapPage>}></Route>
        <Route path='/cleanstore' element={<CleanStore />}></Route>
        <Route path='/cleanstore/:id' element={<CleanStoreDetail />}></Route>
      </Routes>
    </BrowserRouter>
    </CleanStoreContext.Provider>
          <Route path="/community" element={<Community />} />
          <Route path="/details" element={<Details />} />
  );
}

export default App;
