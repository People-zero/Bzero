import './App.css';
import Community from './Community';
import Post from './Post';
import Details from './Details';
import React, {  useReducer, useRef, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const reducer = (state, action) => {
  let newState = [];
  switch(action.tpye) {
    case 'INIT' : {
      return action.data;
    }
    case 'CREATE': {
      const newItem = {
        ...action.data
      };
      newState = [newItem, ...state];
      break;
    }
    case 'REMOVE' : {
      newState = state.filter((it)=> it.id !== action.targetId);
      break;
    }
    case 'EDIT' : {
      newState = state.map((it)=> it.id === action.data.id ? { ...action.data } : it);
      break;
    }
    default :
    return state;
  }
  return newState;
};
export const PostStateContext = React.createContext();
export const PostDispatchContext = React.createContext();

const dumyData = [
  {
    id:1,
    emotion: 1,
    user : "Player1",
    title : "a 1",
    content: "가 라 1",
    date:1660478254683
  },
  {
    id:2,
    emotion: 2,
    user : "Player2",
    title : "b 2qweipqwjeioqjwejqhjoiwejqkwejoqiwjeioqwjioenqwneoiqw",
    content: "나 2dasdasdsasaddassadsaddasadsdass",
    date:1660478254684
  },
  {
    id:3,
    emotion: 3,
    user : "Player3",
    title : "c 3",
    content: "다 3",
    date:1660478254685
  },
  {
    id:4,
    emotion: 4,
    user : "Player4",
    title : "d 4",
    content: "라 4",
    date:1660478254686
  },
  {
    id:5,
    emotion: 5,
    user : "Player5",
    title : "e 5",
    content: "마 5",
    date:1660478254687
  },
  {
    id:6,
    emotion: 5,
    user : "Player6",
    title : "e 5",
    content: "마 리아 5",
    date:1660478254688
  }
]


function App() {

  const onCreate = ( date, emotion, title, content) => {
    dispatch({type :"CREATE", data:{
      id : dataId.current,
      date: new Date(date).getTime(),
      title,
      content,
      emotion,
    }})
    dataId.current += 1;
  } 
  // REMOVE
  const onRemove = (targetId) =>{
    dispatch({type:"REMOVE",targetId});
  }
  // Edit
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type:"EDIT",
      data:{
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion  
      }
    })
  };

const [data, dispatch] = useReducer(reducer, dumyData);
const dataId = useRef(7);
console.log(data)
console.log(dataId)

  return (
    <PostDispatchContext.Provider value={{
      onCreate,
      onEdit,
      onRemove
    }}>
    <PostStateContext.Provider value={data}>
    <BrowserRouter>
      <div className="App"> 
      <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/post" element={<Post />} />
          </Routes>
      </div>
      </BrowserRouter>
    </PostStateContext.Provider>
    </PostDispatchContext.Provider>
  );
}

export default App;