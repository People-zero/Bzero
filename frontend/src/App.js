import React,{ useReducer, useRef } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Community from './Community';
import Post from './Post';
import Details from './Details';

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
    content: "송하윤 멋져 1",
    date:1660478254683
  },
  {
    id:2,
    emotion: 2,
    content: "송하윤 멋져 2",
    date:1660478254684
  },
  {
    id:3,
    emotion: 3,
    content: "송하윤 멋져 3",
    date:1660478254685
  },
  {
    id:4,
    emotion: 4,
    content: "송하윤 멋져 4",
    date:1660478254686
  },
  {
    id:5,
    emotion: 5,
    content: "송하윤 멋져 5",
    date:1660478254687
  }
]

function App() {

  const [data, dispatch] = useReducer(reducer,dumyData);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({type :"CREATE", data:{
      id : dataId.current,
      data: new Date(date).getTime(),
      content,
      emotion
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

  

  return (
    <PostStateContext.Provider value={data}>
    <PostDispatchContext.Provider value={{
      onCreate,
      onEdit,
      onRemove,}}>
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/community" element={<Community />} />
          <Route path="/details" element={<Details />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
    </PostDispatchContext.Provider>
    </PostStateContext.Provider>
  );
}

export default App