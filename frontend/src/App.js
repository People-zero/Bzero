import React, {useState, useEffect} from "react";
import './App.css';
import BottleStore from './BottleStore';
import RegistStore from "./RegistStore";
import info_photo from "./images/info_photo.png";
import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";

const dummyList = [
  {
    name : "공병스토어1",
    grade : 3,
    info_summary : "이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...이곳은 어쩌구저쩌구... 지구를 지키자...",
    info_photo: info_photo,
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    store_url:"www.naver.com",
    map: "",
    businessDay : "평일",
    businessHour : "오전 10시 - 오후 7시",
    dayOff : "토•일•공휴일",
    CollectDay : "매주 수요일",
    CollectHour :"오전 10시 - 오후 7시",
    address : "서울특별시 OO구 OO 길 1232-12(OO동)",
    number : "02-OOO-OOOO",
    info_title:"가게에 대한 설명 (부제목)",
    info:"가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~가게에 대한 설명~",

  },
]

function App() {

  return (
    <div className="App">
      <RegistStore/>
      {/*< BottleStore store={dummyList}/>*/}
    </div>
  );
}

export default App;

// < BottleStore store={dummyList}/>
