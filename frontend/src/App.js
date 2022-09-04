
import './App.css';
import EditProfilePage from './EditProfilePage';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <EditProfilePage/>
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