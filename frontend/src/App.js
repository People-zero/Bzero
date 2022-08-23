
import './App.css';
import WriteDiaryPage from './WriteDiaryPage';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <WriteDiaryPage/>
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

export default App