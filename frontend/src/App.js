import JoinPage from "./JoinPage";
import LoginPage from './LoginPage';
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import React from 'react';
import MainPage from './MainPage';
import MyPage from "./MyPage";
const dummyList = [
  {
    profile: "example_profile.jpg",
    nickname: "닉네임",
    email: "email@email.com",
    point: 4300,
  },
];

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
function App() {
  return (
   
      
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
      
      </Routes>
      
      </BrowserRouter>



      
    
    
  );
}

export default App;
