import "./CalendarPage.css";
import CalendarPage from "./CalendarPage";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';

const dummy_checked_date = [
  "2022-08-01",
  "2022-08-05",
  "2022-08-13",
  "2022-08-30",
];

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <CalendarPage checked_date={dummy_checked_date} />
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
