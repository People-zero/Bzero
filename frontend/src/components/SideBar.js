import { NavLink } from "react-router-dom";
import BZero from './../BZero.png' 

const env=process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const SideBar = () => {
    return (
      <div className="SideBar">
      <img src={BZero} alt="BZero" /> 
      {/* <img src={process.env.PUBLIC_URL + `assets/BZero.png`}/> 엑박 문제 때문에 import 방식 변경 */}
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