//import React, {useState, useEffect} from "react";
import './App.css';
import BottleStore from './BottleStore';
//import RegistStore from "./RegistStore";
import info_photo from "./images/info_photo.jpg";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
//import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React,{useEffect, useReducer,useRef, useState} from 'react';
import axios from 'axios';
import RegistStore from './RegistStore';
//import { dummyData } from './util/dummyData';
//import { dummyReview } from './util/dummyReview';
//import Point from './components/Point';

const dummyList = [
  {
    name : "공병스토어1",
    store_url:"www.naver.com",
    grade : 3,
    info_summary : "이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...",
    photo: info_photo,
    photo1:photo1,
    photo2:photo2,
    photo3:photo3,
    map: "",
    businessDay : "평일",
    businessHour : "오전 10시 - 오후 7시",
    dayOff : "토•일•공휴일",
    CollectDay : "매주 수요일",
    CollectHour :"오전 10시 - 오후 7시",
    address : "서울특별시 OO구 OO 길 1232-12(OO동)",
    inquiries : "02-OOO-OOOO",
    info_title:"가게에 대한 설명 (부제목)",
    info:"가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~",

  },
]



function App() {

  return (
    <div className='App'>
      <BottleStore store={dummyList}/>
      {/*<RegistStore/>*/}
    </div>

  );
}

export default App;
