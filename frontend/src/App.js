import "./MyPage.css";
import MyPage from "./MyPage";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
const dummyList = [
  {
    profile: "example_profile.jpg",
    nickname: "닉네임",
    email: "email@email.com",
    point: 4300,
  },
];

const dummy_badge = [
  { badge_id: 1, badge_type: "badge1.png" },
  { badge_id: 2, badge_type: "badge1.png" },
  { badge_id: 5, badge_type: "badge1.png" },
  { badge_id: 6, badge_type: "badge1.png" },
  { badge_id: 7, badge_type: "badge1.png" },
];

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <MyPage user_info={dummyList} badge_info={dummy_badge} />
      {/* <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/new' element={<New></New>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
        <Route path='/diary/:id' element={<Diary></Diary>}></Route>
        
      </Routes>
       */}
    </div>
    // </BrowserRouter>
  );
}

export default App;
