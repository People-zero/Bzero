import MyPage from "./MyPage";
import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const dummyList = [
  {
    profile: "example_profile.jpg",
    nickname: "닉네임",
    email: "email@email.com",
    point: 6300,
  },
];

const dummy_checked_date = ["2022-08-01", "2022-08-07", "2022-08-13"];

const dummy_badge = [
  { badge_id: 1, badge_type: "badge1.png" },
  { badge_id: 2, badge_type: "badge1.png" },
  { badge_id: 3, badge_type: "badge1.png" },
  { badge_id: 5, badge_type: "badge1.png" },
  { badge_id: 6, badge_type: "badge1.png" },
  { badge_id: 4, badge_type: "badge1.png" },
  { badge_id: 7, badge_type: "badge1.png" },
];
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/mypage"
          element={
            <MyPage
              user_info={dummyList}
              checked_date={dummy_checked_date}
              badge_info={dummy_badge}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
