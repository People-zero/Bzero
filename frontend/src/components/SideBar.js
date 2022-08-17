import SideBarItem from "./SideBarItem";
import { useLocation, NavLink } from "react-router-dom";

const env=process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

// {emotion_id: 5, emotion_img: process.env.PUBLIC_URL + `/assets/emotion5.png`,emotion_descript: '끔찍함'}

// const menus = [ //URL 임의로 정해놓음.
//     {name : "마이페이지", path:  "/mypage"},
//     {name : "가게 찾기" ,path: "/findstore"},
//     {name : "클린스토어",path:"/cleanstore" },
//     {name : "공병스토어",path:"/emptybottlestore" },
//     {name : "커뮤니티",path:"/community" },
//     {name : "제로웨이스트 일기",path: "/zeroweistdiary"}
// ];

const SideBar = () => {
    return (
      <div className="SideBar">
      <img src={process.env.PUBLIC_URL + `assets/BZero.png`}/>
      <nav>
        <div className="mypage"><NavLink to="/mypage">마이페이지</NavLink></div>
        <div className="findstore"><NavLink to="/findstore">가게 찾기</NavLink></div>
        <div className="cleanstore"><NavLink to="/cleanstore">클린스토어</NavLink></div>
        <div className="emptybottlestore"><NavLink to="/emptybottlestore">공병스토어</NavLink></div>
        <div className="community"><NavLink to="/community">커뮤니티</NavLink></div>
        <div className="zeroweistdiary"><NavLink to="/zeroweistdiary">제로웨이스트 일기</NavLink></div>
        <div className="logout"><NavLink to="/logout">로그아웃</NavLink></div>
      </nav>
      </div>
    );
  };

export default SideBar;  