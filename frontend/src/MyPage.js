import React, { useEffect, useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "./css/MyPage.css";
import MapNav from "./components/MapNav";
import MypageNav from "./components/MypageNav";
import Axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
const point_list = [
  { level: "B", level_kr: "브론즈", min: 0, max: 1500 },
  { level: "S", level_kr: "실버", min: 1500, max: 4500 },
  { level: "G", level_kr: "골드", min: 4500, max: 10000 },
  { level: "D", level_kr: "다이아", min: 10000, max: 20000 },
];

const my_level = (user_info) => {
  if (user_info?.point < 1500) {
    return "B";
  } else if (user_info?.point < 4500) {
    return "S";
  } else if (user_info?.point < 10000) {
    return "G";
  } else if (user_info?.point >= 10000) {
    return "D";
  }
};
const MyPage = ({ userdata, user_info, checked_date, badge_info }) => {
  const navigate=useNavigate()
  const [loading, setLoading] = useState(false);
  useEffect(() => {
		// 이미 로그인이 되어있다면 redirect
    if (localStorage.getItem('token') !== null) {
      console.log("로그인")
      setLoading(true)
    } else {
      setLoading(false);
  
    }
  });
  
  const [value, onChange] = useState(new Date());

  const refined_date = [];
  if(loading===true){
  for (const value of checked_date) {
    refined_date.push(value.attended_date);
  }
}
  const handleLogout = () => {
    let token = localStorage.getItem('token')
    
    Axios.post('http://127.0.0.1:8000/auth/logout/', token)
      .then(res => {
        localStorage.clear()
        // 사용하려면 App.js에서 /로 라우팅해야 한다
        window.location.replace('/main')
      });
  }
// useEffect(()=>{
//   const mydata=userdata[0]
// },[userdata])

  return (
    <div className="mypage">
      <MypageNav/>
      {loading===true &&(
      <div className="mypage_main">
        
          <div>
            <header className="mypage_header">
              <p className="mypage_title">마이페이지</p>
            </header>
            <section className="mypage_my">
              <div className="mypage_my_info">
                <div className="mypage_my_profile">
                  
                  {userdata[0]?.profile?.profile_image &&(
                  <img src={userdata[0]?.profile?.profile_image}/>)}
                    {!userdata[0]?.profile?.profile_image &&(
                  <img src={process.env.PUBLIC_URL+`../img/Group 1183 (1).png`}/>)}
      
                  {/* <img src={`static/${it.profile}`} alt="profile"></img> */}
                  <p className="mypage_nickname">{userdata[0]?.last_name}</p>
                  <p className="mypage_email">{userdata[0]?.email}</p>
                  <button onClick={()=>{navigate('/mypage/edit')
                  }} className="mypage_edit_profile_btn">
                    내정보수정
                  </button>
                </div>
                <div className="mypage_my_menu">
                  <ul className="mypage_my_menu_detail">
                    <li>
                      <a
                        className="mypage_goto_info_menu"
                        href="#mypage_my_info"
                      >
                        내 정보
                      </a>
                    </li>
                    <li>
                      <a className="mypage_goto_menu" href="#mypage_my_diary">
                        제로웨이스트 일기 작성
                      </a>
                    </li>
                    <li>
                      <button className="mypage_goto_menu" onClick={()=>{handleLogout()}}>
                        로그아웃
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mypage_my_contents">
                <div className="mypage_my_contents_top">
                  <div className="mypage_my_level">
                    <div className="mypage_level_title">
                      <p>{userdata[0]?.last_name}님은</p>
                    </div>
                    <div className="mypage_level_title2">
                      <p>현재&nbsp;</p>
                      <p className="mypage_level_kr">
                        {point_list
                          .filter((list) => list.level === my_level(userdata[0]))
                          .map((list) => (
                            <div>
                              <p> {list.level_kr}&nbsp;</p>
                            </div>
                          ))}
                      </p>
                      <p>레벨입니다</p>
                    </div>
                    <img
                      className="mypage_level_img"
                      src={
                        process.env.PUBLIC_URL + `/img/level${my_level(userdata[0])}.png`
                      }
                      alt="level"
                    />
                    {/* <img className="mypage_level_img" src={`static/level${my_level(it)}.png`} alt="level"></img> */}
                  </div>
                  <div className="mypage_my_point_status">
                    {point_list
                      .filter((list) => list.level === my_level(userdata[0]))
                      .map((list) => (
                        <div>
                          <p className="mypage_point_title">현재 포인트</p>
                          <div className="mypage_point_detail">
                            <img
                              className="mypage_coins_img"
                              src={process.env.PUBLIC_URL + `/img/coins.png`}
                              alt="coins"
                            />
                            {/* <img className="mypage_coins_img"
                              src={`static/coins.png`}
                              alt="coins"></img> */}
                            <p className="mypage_my_point">{userdata[0]?.point}P</p>
                            <p className="mypage_next_point">
                              다음 레벨까지 {list.max - userdata[0]?.point}P 남았어요!
                            </p>
                          </div>
                          <progress
                            className="mypage_point_progress"
                            value={userdata[0]?.point}
                            min={list.min}
                            max={list.max}
                          ></progress>
                        </div>
                      ))}
                  </div>
                </div>
                <div className="mypage_my_contents_bottom">
                  <div className="mypage_my_calendar_status">
                    <div className="mypage_content_title">현재 인증 상황</div>
                    <div className="mypage_my_calendar">
                      <Calendar
                        onChange={onChange}
                        value={value}
                        calendarType="US"
                        formatDay={(locale, date) => moment(date).format("D")}
                        formatShortWeekday={(locale, date) =>
                          moment(date).format("ddd")
                        }
                        formatMonthYear={(locale, date) =>
                          moment(date).format("YYYY.MM")
                        }
                        showNeighboringMonth={false}
                        next2Label={null}
                        nextLabel={null}
                        prev2Label={null}
                        prevLabel={null}
                        tileClassName={({ date, view }) => {
                          if (
                            refined_date.find(
                              (x) => x === moment(date).format("YYYY-MM-DD")
                            )
                          ) {
                            return "mypage_calendar_highlight";
                          }
                        }}
                      />
                    </div>
                  </div>
                  <div className="mypage_my_badge">
                    <div className="mypage_content_title">내 뱃지</div>
                    <div className="mypage_badge_top">
                      {badge_info
                        .filter((it) => it.badge_id === 1)
                        .map((it) => (
                          <div className="mypage_badge_img">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/img/${it.badge_type}`
                              }
                              alt=""
                            />
                            {/* <img src={`static/${it.badge_type}`} alt=""></img> */}
                          </div>
                        ))}
                      {badge_info
                        .filter((it) => it.badge_id === 2)
                        .map((it) => (
                          <div className="mypage_badge_img2">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/img/${it.badge_type}`
                              }
                              alt=""
                            />
                            {/* <img src={`static/${it.badge_type}`} alt=""></img> */}
                          </div>
                        ))}
                      {badge_info
                        .filter((it) => it.badge_id === 3)
                        .map((it) => (
                          <div className="mypage_badge_img3">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/img/${it.badge_type}`
                              }
                              alt=""
                            />
                            {/* <img src={`static/${it.badge_type}`} alt=""></img> */}
                          </div>
                        ))}
                      {badge_info
                        .filter((it) => it.badge_id === 4)
                        .map((it) => (
                          <div className="mypage_badge_img4">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/img/${it.badge_type}`
                              }
                              alt=""
                            />
                            {/* <img src={`static/${it.badge_type}`} alt=""></img> */}
                          </div>
                        ))}

                      <img
                        className="mypage_badge_top_base"
                        src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                        alt="base"
                      />
                      {/* <img className="mypage_badge_top_base" src={`static/badge_base.png`} alt="base"></img> */}
                      <img
                        className="mypage_badge_top_base"
                        src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                        alt="base"
                      />
                      {/* <img className="mypage_badge_top_base" src={`static/badge_base.png`} alt="base"></img> */}
                      <img
                        className="mypage_badge_top_base"
                        src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                        alt="base"
                      />
                      {/* <img className="mypage_badge_top_base" src={`static/badge_base.png`} alt="base"></img> */}
                      <img
                        className="mypage_badge_top_base"
                        src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                        alt="base"
                      />
                      {/* <img className="mypage_badge_top_base" src={`static/badge_base.png`} alt="base"></img> */}
                    </div>
                    <div className="mypage_badge_bottom">
                      {badge_info
                        .filter((it) => it.badge_id === 5)
                        .map((it) => (
                          <div className="mypage_badge_img">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/img/${it.badge_type}`
                              }
                              alt=""
                            />
                            {/* <img src={`static/${it.badge_type}`} alt=""></img> */}
                          </div>
                        ))}
                      {badge_info
                        .filter((it) => it.badge_id === 6)
                        .map((it) => (
                          <div className="mypage_badge_img2">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/img/${it.badge_type}`
                              }
                              alt=""
                            />
                            {/* <img src={`static/${it.badge_type}`} alt=""></img> */}
                          </div>
                        ))}
                      {badge_info
                        .filter((it) => it.badge_id === 7)
                        .map((it) => (
                          <div className="mypage_badge_img3">
                            <img
                              src={
                                process.env.PUBLIC_URL + `/img/${it.badge_type}`
                              }
                              alt=""
                            />
                            {/* <img src={`static/${it.badge_type}`} alt=""></img> */}
                          </div>
                        ))}

                      <img
                        className="mypage_badge_bottom_base"
                        src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                        alt="base"
                      />
                      {/* <img className="mypage_badge_bottom_base" src={`static/badge_base.png`} alt="base"></img> */}
                      <img
                        className="mypage_badge_bottom_base"
                        src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                        alt="base"
                      />
                      {/* <img className="mypage_badge_bottom_base" src={`static/badge_base.png`} alt="base"></img> */}
                      <img
                        className="mypage_badge_bottom_base"
                        src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                        alt="base"
                      />
                      {/* <img className="mypage_badge_bottom_base" src={`static/badge_base.png`} alt="base"></img> */}
                      <div>
                        <button className="mypage_badge_more_btn">
                          더보기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>
       
      </div>
      )}
      {loading===false &&(
      <div className="loginfailed">마이페이지는 로그인 후 이용해주세요
      <div>
      <button onClick={()=>{navigate('/login')}} className="loginfailed_login">로그인</button>
      <button onClick={()=>{navigate('/login')}} className="loginfailed_join">회원가입</button></div></div>
      )}
    </div>
  );
};

export default MyPage;
