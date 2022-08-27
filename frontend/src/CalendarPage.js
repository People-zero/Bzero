import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";

const CalendarPage = ({ checked_date }) => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="calendar_page">
      <section className="calendar_page_nav">
        <header className="calendar_page_goto_home">
          <a className="calendar_page_goto_home_detail" href="#main">
            BZero
          </a>
        </header>
        <nav className="calendar_page_nav_menu">
          <ul className="calendar_page_nav_detail">
            <li>
              <a className="calendar_page_goto" href="#mypage">
                마이페이지
              </a>
            </li>
            <li>
              <a className="calendar_page_goto" href="#find_store">
                가게 찾기
              </a>
            </li>
            <li>
              <a className="calendar_page_goto" href="#community">
                커뮤니티
              </a>
            </li>
            <li>
              <a className="calendar_page_goto_calendar" href="#zero_diary">
                제로웨이스트 일기
              </a>
            </li>
            <li>
              <a className="calendar_page_logout" href="#main">
                로그아웃
              </a>
            </li>
          </ul>
        </nav>
      </section>
      <div className="calendar_page_main">
        <header className="calendar_page_header">
          <p className="calendar_page_title">제로웨이스트 캘린더</p>
          <div className="calender_page_title_sub">
            <p className="calender_page_title_sub_title">
              제로웨이스트 일기 또는 커뮤니티에 글을 작성해서 캘린더에 스탬프를
              모아보세요
            </p>
          </div>
        </header>
        <section className="calendar_page_contents">
          <div className="calendar_page_goto_other">
            <a className="calendar_page_goto_edit" href="#goto">
              일기 쓰러 가기 -&gt;
            </a>
            <a className="calendar_page_goto_edit" href="goto">
              글 쓰러 가기 -&gt;
            </a>
          </div>
          <div className="calendar_page_my_calendar">
            <Calendar
              onChange={onChange}
              value={value}
              onClickDay={(value, event) =>
                window.location.assign(`/${moment(value).format("YYYY-MM-DD")}`)
              }
              calendarType="US"
              formatDay={(locale, date) => moment(date).format("D")}
              formatShortWeekday={(locale, date) => moment(date).format("ddd")}
              formatMonthYear={(locale, date) => moment(date).format("YYYY.MM")}
              showNeighboringMonth={false}
              next2Label={null}
              prev2Label={null}
              tileClassName={({ date, view }) => {
                if (
                  checked_date.find(
                    (x) => x === moment(date).format("YYYY-MM-DD")
                  )
                ) {
                  return "calendar_page_highlight";
                }
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default CalendarPage;
