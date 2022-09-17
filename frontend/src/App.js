import MyPage from "./MyPage";
import MapPage from "./MapPage";
import React, { useState } from "react";
import { useReducer, useRef, useEffect } from "react";
import CleanStoreDetail from "./CleanStoreDetail";
import CleanStorePage from "./CleanStorePage";
import axios from "axios";
import { dummyData } from "./util/dummyData";
import Community from "./Community";
import Details from "./Details";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import JoinPage from "./JoinPage";
import CalendarPage from "./CalendarPage";
import RegistBottleStore from "./RegistBottleStore";
import info_photo from "./images/info_photo.jpg";
import RegistCleanStore from "./RegistCleanStore";

import photo1 from "./images/photo1.png";
import photo2 from "./images/photo2.png";
import photo3 from "./images/photo3.png";
import BottleStore from "./BottleStore";

import Post from "./Post.js";
import EditProfilePage from "./EditProfilePage";
import DiaryDetailPage from "./DiaryDetailPage";
import WriteDiaryPage from "./WriteDiaryPage"

const dummy_badge = [
  { badge_id: 1, badge_type: "badge1.png" },
  { badge_id: 2, badge_type: "badge1.png" },
  { badge_id: 3, badge_type: "badge1.png" },
  { badge_id: 5, badge_type: "badge1.png" },
  { badge_id: 6, badge_type: "badge1.png" },
  { badge_id: 4, badge_type: "badge1.png" },
  { badge_id: 7, badge_type: "badge1.png" },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    default:
      return state;
  }
};

export const CleanStoreContext = React.createContext();
export const PostStateContext = React.createContext();
export const PostDispatchContext = React.createContext();

  
function App() {
  const [place, setplace] = useState([]);
  const [userdata, setuserdata] = useState([]);
  const [attendDate, setAttendDate] = useState([]);
  const [FirstData, setFirstdata]= useState([]);
  const [diaryDetailData, setDiaryDetailData] = useState([]);

  const getDiaryDetail = async () => {
    const res = await fetch("https://bzeroo.herokuapp.com/https://bzero.tk/post/C/1").then((res) =>
      res.json()
    );
    // console.log(res); // 500개의 데이터

    const initData = res.map((it) => {
      // console.log(it.id)
      return {
        id: it.id,
        title: it.title,
        content: it.content,
        date: it.created_at,
        image: it.image,
        author: it.author,
        // image: it.store_image,
      };
    });
    setDiaryDetailData(initData);
  };

  useEffect(()=>{

    getDiaryDetail()
  })

  const getpost = async () => {
    const res = await fetch("https://bzeroo.herokuapp.com/https://bzero.tk/post")
    .then((res) =>
      res.json()
    );
    // console.log(res); // 500개의 데이터

    const initData = res.map((it) => {
      // console.log(it.id)
      return {
        id: it.id,
        emotion: it.category,
        user: it.author, // 작성자
        title: it.title,
        content: it.content,
        date: it.created_at,
        author:it.author_name
        // image: it.store_image,
      };
    });

    setFirstdata(initData);
  };


  const [CleanStore,setCleanStore] = useState([]);
  const getData = async () => {
    const res = await fetch(
      "https://bzeroo.herokuapp.com/https://bzero.tk/store/bottle_collection_Store/"
    ).then((res) => res.json());
    // console.log(res); // 500개의 데이터

    const initData = res.map((it) => {
      // console.log(it.id)
      return {
        id: it.id, // 작성자
        place_name: it.store_name,
        x: it.store_longtitude,
        y: it.store_latitude,
        day: it.pickup_day.split(","),
        Bottle_kind: it.bottle_kind.split(","),
        image: it.store_image,
        address:it.address,
      };
    });

    setplace(initData);
  };
  useEffect(() => {
    const getData = async () => {
      let token = localStorage.getItem("token");
      let token2 = "Token ".concat(token);
      
      const res = await fetch("https://bzeroo.herokuapp.com/https://bzero.tk/auth/accounts", {
        method: "GET",
        headers: {
          Authorization: "Token ".concat(token),
        },
      }).then((res) => res.json());
      
      setuserdata(res);
    };

    getData();
    getpost();
  },[]);

  useEffect(() => {
    const getAttendData = async () => {
      let token = localStorage.getItem("token");
      let token2 = "Token ".concat(token);
      const res = await fetch("https://bzeroo.herokuapp.com/https://bzero.tk/auth/attend/", {
        method: "GET",
        headers: {
          Authorization: "Token ".concat(localStorage.getItem("token")),
        },
      }).then((res) => res.json());
      setAttendDate(res);
    };
    getAttendData();
  }, []);

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        data: new Date(date).getTime(),
        content,
        emotion,
      },
    });


  const mypagelink = userdata?.id;
    dataId.current += 1;
  };
  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // Edit
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };

  const [data,dispatch]=useReducer(reducer,dummyData);
  const dataId= useRef(10);
  

  useEffect(() => {
    // init();
    
  });
  
  const init = async() => {
    const response=await fetch("https://bzeroo.herokuapp.com/https://bzero.tk/store/clean_store/")
    .then((response)=>response.json()) 
    const initdata=response.map((it)=>{
      
      return{
        id : it.pk,
        store_name : it.store_name,
        store_image: it.store_image,
        opening_time : it.opening_time,
        store_longtitude : it.store_longtitude,
        store_latitude : it.store_latitude,
        telephone : it.telephone,
        description : it.description,
        point_avg : it.point_avg,
        address : it.address,
        store_url : it.store_url,
      }

    })
       
    setCleanStore(initdata)
    
    // if (data.lengh<1){
    //   dispatch({type:"INIT",data:dummyData});
    // }
  }



  useEffect(()=>{
    init();
    console.log(CleanStore)
  },[])

  const mypagelink=userdata?.id


  // const [data, dispatch] = useReducer(reducer, FirstData);
  // const dataId = useRef(7);

  // console.log(data);
  // console.log(userdata?.id)
  // console.log(userdata)

  return (
    <PostDispatchContext.Provider
      value={{
        onCreate,
      }}
    >
        <CleanStoreContext.Provider value={CleanStore}>
      
          
   
        <PostStateContext.Provider value={FirstData}>
          <BrowserRouter>
            <Routes>
              <Route
                path="/calendar"
                element={<CalendarPage checked_date={attendDate} />}
              ></Route>
              <Route path="/" element={<MainPage></MainPage>}></Route>
              <Route path="/login" element={<LoginPage></LoginPage>}></Route>
              <Route  path="/mypage/edit" element={<EditProfilePage userdata={userdata} />}></Route>
              <Route path="/main" element={<MainPage></MainPage>}></Route>
              <Route
                path="/mypage"
                element={
                  <MyPage
                    userdata={userdata}
                    
                    checked_date={attendDate}
                    badge_info={dummy_badge}
                  />
                }
              ></Route>
              <Route path="/join" element={<JoinPage></JoinPage>}></Route>
              <Route
                path="/map"
                element={<MapPage place={place}></MapPage>}
              ></Route>
              <Route path="/clean_store/" element={<CleanStorePage />}></Route>
              <Route
                path="/clean_store/:id"
                element={<CleanStoreDetail />}
              ></Route>
              <Route path="/community" element={<Community />} />
              <Route path="/details/:id" element={<Details />} />
              <Route path="/regist_store" element={<RegistBottleStore />}></Route>
              <Route
                path="/bottle_store/:id"
                element={<BottleStore place={place}></BottleStore>}
              ></Route>
              <Route path="/post" element={<Post userdata={userdata} />}></Route>
              <Route
                path="/diary_detail/:date"
                element={
                  <DiaryDetailPage diary_detail_post={diaryDetailData} userdata={userdata} />
                }
              ></Route>
              <Route
              path="/write_diary"
              element={<WriteDiaryPage userdata={userdata}></WriteDiaryPage>}></Route>
            </Routes>
          </BrowserRouter>
        </PostStateContext.Provider>
      </CleanStoreContext.Provider>
    </PostDispatchContext.Provider>
  );
}

export default App;


