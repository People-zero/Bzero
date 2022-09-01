import MyPage from "./MyPage";
import MapPage from "./MapPage";
import React, { useState } from "react";
import {useReducer,useRef,useEffect} from 'react';
import CleanStoreDetail from './CleanStoreDetail';
import CleanStore from './CleanStore';
import axios from 'axios';
import { dummyData } from './util/dummyData';
import Community from './Community'
import Details from './Details'
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from "./LoginPage"
import MainPage from "./MainPage";
import JoinPage from "./JoinPage";
import CalendarPage from "./CalendarPage";
import info_photo from "./images/info_photo.jpg";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import BottleStore from './BottleStore';
import RegistStore from './RegistStore';

import EditProfilePage from './EditProfilePage';
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


  
const dummy_checked_date = ["2022-08-01", "2022-08-05", "2022-08-13"];
const dummy_badge = [
  { badge_id: 1, badge_type: "badge1.png" },
  { badge_id: 2, badge_type: "badge1.png" },
  { badge_id: 3, badge_type: "badge1.png" },
  { badge_id: 5, badge_type: "badge1.png" },
  { badge_id: 6, badge_type: "badge1.png" },
  { badge_id: 4, badge_type: "badge1.png" },
  { badge_id: 7, badge_type: "badge1.png" },
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
export const PostStateContext = React.createContext();
export const PostDispatchContext = React.createContext();
const dummyList2 = [
  {
    name : "공병스토어1",
    grade : 3,
    store_url:"www.naver.com",
    info_summary : "이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...",
    photo: info_photo,
    photo1:photo1,
    photo2:photo2,
    map: "",
    photo3:photo3,
    businessDay : "평일",
    businessHour : "오전 10시 - 오후 7시",
    dayOff : "토•일•공휴일",
    CollectHour :"오전 10시 - 오후 7시",
    address : "서울특별시 OO구 OO 길 1232-12(OO동)",
    CollectDay : "매주 수요일",
    inquiries : "02-OOO-OOOO",
    info_title:"가게에 대한 설명 (부제목)",
    info:"가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~",

  },
]
function App() {
  const [place,setplace]=useState([])

  const getData = async() => {
    const res = await fetch("http://127.0.0.1:8000/store/bottle_collection_Store/")
      .then((res)=>res.json());
      // console.log(res); // 500개의 데이터

      const initData = res.map((it)=>{
        // console.log(it.id)
        return {
          id : it.id, // 작성자
          place_name:it.store_name,
          x:it.store_longtitude,
          y:it.store_latitude,
          day:it.pickup_day.split(","),
          Bottle_kind:it.bottle_kind.split(","),
          image:it.store_image
        }

      
      });
      
      setplace(initData)
      
  }
  useEffect(()=>{
    
    const getData = async() => {
      let token=localStorage.getItem('token')
      let token2='Token '.concat(token)
      console.log(token2)
      const res = await fetch("http://127.0.0.1:8000/auth/user",{
      method:'GET',
      headers:{
        'Authorization': 'Token '.concat(token)
      }
    })
        .then((res)=>res.json());
        console.log(res)
    
  }
  getData()},[])

  useEffect(()=>{
    getData();
    
  },[])

  
    
  
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
    
    <PostStateContext.Provider value={data}>
    <PostDispatchContext.Provider value={{
      onCreate,
      onEdit,
      onRemove,}}>
    <CleanStoreContext.Provider value={data}>
      <BrowserRouter>
      <Routes>
        <Route
        path="/calendar"
          element={<CalendarPage checked_date={dummy_checked_date} />}
          
        ></Route>
        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/edit' element={<EditProfilePage/>}></Route>
        <Route path='/main' element={<MainPage></MainPage>}></Route>
        <Route path='/mypage' element={<MyPage
        user_info={dummyList}
        checked_date={dummy_checked_date}
        badge_info={dummy_badge}
      />}></Route>
      <Route path='/join' element={<JoinPage></JoinPage>}></Route>
      <Route path='/map' element={<MapPage place={place}></MapPage>}></Route>
      <Route path='/clean_store' element={<CleanStore />}></Route>
        <Route path='/clean_store/:id' element={<CleanStoreDetail />}></Route>
        <Route path="/community" element={<Community />} />
        <Route path="/details" element={<Details />} />
        <Route path="/regist_store" element={<RegistStore/>}></Route>
        <Route path="/bottle_store" element={<BottleStore store={dummyList2}></BottleStore>}></Route>
      </Routes>
    </BrowserRouter>
    </CleanStoreContext.Provider>
    </PostDispatchContext.Provider>
    </PostStateContext.Provider>
          
      
  );
}

export default App;
