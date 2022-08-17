import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "./css/MyPage.css"
const point_list = [
  { level: "B", level_kr: "브론즈", min: 0, max: 1500 },
  { level: "S", level_kr: "실버", min: 1500, max: 4500 },
  { level: "G", level_kr: "골드", min: 4500, max: 10000 },
  { level: "D", level_kr: "다이아", min: 10000, max: 20000 },
];

const my_level = (user_info) => {
  if (user_info.point < 1500) {
    return "B";
  } else if (user_info.point < 4500) {
    return "S";
  } else if (user_info.point < 10000) {
    console.log(user_info.point);
    return "G";
  } else if (user_info.point >= 10000) {
    return "D";
  }
};
const MyPage = ({ user_info, checked_date, badge_info }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="mypage">
      <div className="mypage_nav">
        <ul>
          <li>
            <a className="mypage_mypage" href="#main">
              BZero
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a className="mypage_goto_mypage" href="#mypage">
              마이페이지
            </a>
          </li>
          <li>
            <a className="mypage_goto" href="#find_store">
              가게 찾기
            </a>
          </li>
          <li>
            <a className="mypage_goto" href="#community">
              커뮤니티
            </a>
          </li>
          <li>
            <a className="mypage_goto" href="#zero_diary">
              제로웨이스트 일기
            </a>
          </li>
          <li>
            <a className="mypage_logout" href="#main">
              로그아웃
            </a>
          </li>
        </ul>
      </div>
      <div className="mypage_content">
        <div>
          {user_info.map((it) => (
            <div>
              <header className="mypage_where">
                <p className="mypage_title">마이페이지</p>
              </header>
              <div className="mypage_my">
                <section className="mypage_my_info">
                  <img
                    src={process.env.PUBLIC_URL + `/img/${it.profile}`}
                    alt="profile"
                  />
                  <p className="mypage_nickname">{it.nickname}</p>
                  <p className="mypage_email">{it.email}</p>
                  <button className="mypage_edit_info_btn">내정보수정</button>
                </section>

                <section className="mypage_my_menu">
                  <ul>
                    <li>
                      <a className="mypage_info" href="#mypage_my_info">
                        내 정보
                      </a>
                    </li>
                    <li>
                      <a
                        className="mypage_goto_menu"
                        href="#mypage_my_calendar"
                      >
                        제로웨이스트 캘린더
                      </a>
                    </li>
                    <li>
                      <a className="mypage_goto_menu" href="#mypage_my_diary">
                        제로웨이스트 일기
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="mypage_level">
                <div className="mypage_level_detail">
                  <div className="mypage_level_title">
                    <p>{it.nickname}님은</p>
                  </div>
                  <div className="mypage_level_title2">
                    <p>현재&nbsp;</p>
                    <p className="mypage_level_kr">
                      <br />
                      {point_list
                        .filter((list) => list.level === my_level(it))
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
                      process.env.PUBLIC_URL + `/img/level${my_level(it)}.png`
                    }
                    alt="level"
                  />
                </div>
                <div className="mypage_level_point">
                  <p className="mypage_point">현재 포인트</p>

                  <p className="mypage_my_point">
                    <img
                      className="mypage_coins_img"
                      src={process.env.PUBLIC_URL + `/img/coins.png`}
                      alt="coins"
                    />
                    {it.point}P
                  </p>
                  {point_list
                    .filter((list) => list.level === my_level(it))
                    .map((list) => (
                      <div>
                        <p className="mypage_next_point">
                          다음 레벨까지 {list.max - it.point}P 남았어요!
                        </p>
                        <progress
                          className="mypage_point_progress"
                          value={it.point}
                          min={list.min}
                          max={list.max}
                        ></progress>
                      </div>
                    ))}
                </div>
              </div>
              <div className="mypage_calendar_status">
                <div className="mypage_content_title">현재 인증 상황</div>
                <Calendar
                  className="mypage_calendar"
                  onChange={onChange}
                  value={value}
                  tileClassName={({ date, view }) => {
                    if (
                      checked_date.find(
                        (x) => x === moment(date).format("YYYY-MM-DD")
                      )
                    ) {
                      return "highlight";
                    }
                  }}
                />
              </div>
            </div>
          ))}
          <div className="mypage_badge">
            <div className="mypage_content_title">내 뱃지</div>
            <div className="mypage_badge_top">
              <div>
                {badge_info
                  .filter((it) => it.badge_id === 1)
                  .map((it) => (
                    <div className="mypage_badge_img">
                      <img
                        src={process.env.PUBLIC_URL + `/img/${it.badge_type}`}
                        alt=""
                      />
                    </div>
                  ))}
                {badge_info
                  .filter((it) => it.badge_id === 2)
                  .map((it) => (
                    <div className="mypage_badge_img2">
                      <img
                        src={process.env.PUBLIC_URL + `/img/${it.badge_type}`}
                        alt=""
                      />
                    </div>
                  ))}
                {badge_info
                  .filter((it) => it.badge_id === 3)
                  .map((it) => (
                    <div className="mypage_badge_img3">
                      <img
                        src={process.env.PUBLIC_URL + `/img/${it.badge_type}`}
                        alt=""
                      />
                    </div>
                  ))}
                {badge_info
                  .filter((it) => it.badge_id === 4)
                  .map((it) => (
                    <div className="mypage_badge_img4">
                      <img
                        src={process.env.PUBLIC_URL + `/img/${it.badge_type}`}
                        alt=""
                      />
                    </div>
                  ))}
              </div>

              <img
                src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                alt="base"
              />
              <img
                className="mypage_badge_top_base"
                src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                alt="base"
              />
              <img
                className="mypage_badge_top_base"
                src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                alt="base"
              />
              <img
                className="mypage_badge_top_base"
                src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                alt="base"
              />
            </div>
            <div className="mypage_badge_bottom">
              <div>
                {badge_info
                  .filter((it) => it.badge_id === 5)
                  .map((it) => (
                    <div className="mypage_badge_img">
                      <img
                        src={process.env.PUBLIC_URL + `/img/${it.badge_type}`}
                        alt=""
                      />
                    </div>
                  ))}
                {badge_info
                  .filter((it) => it.badge_id === 6)
                  .map((it) => (
                    <div className="mypage_badge_img2">
                      <img
                        src={process.env.PUBLIC_URL + `/img/${it.badge_type}`}
                        alt=""
                      />
                    </div>
                  ))}
                {badge_info
                  .filter((it) => it.badge_id === 7)
                  .map((it) => (
                    <div className="mypage_badge_img3">
                      <img
                        src={process.env.PUBLIC_URL + `/img/${it.badge_type}`}
                        alt=""
                      />
                    </div>
                  ))}
              </div>
              <div>
                <img
                  src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                  alt="base"
                />
                <img
                  className="mypage_badge_bottom_base"
                  src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                  alt="base"
                />
                <img
                  className="mypage_badge_bottom_base"
                  src={process.env.PUBLIC_URL + `/img/badge_base.png`}
                  alt="base"
                />
                <button className="mypage_badge_more_btn">더보기</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
