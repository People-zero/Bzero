import "./App.css";
import CalendarPage from "./CalendarPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import { useReducer, useRef, useEffect } from "react";

const dummy_checked_date = [
  "2022-08-01",
  "2022-08-05",
  "2022-08-13",
  "2022-08-30",
];

const dummy_checked_date2 = [
  {
    id: 8,
    username: 4,
    attended_date: "2022-08-10",
  },
  {
    id: 9,
    username: 4,
    attended_date: "2022-08-03",
  },
];

function App() {
  const [attendDate, setAttendDate] = useState([]);

  const attendDatesForCalendar = () => {
    axios.get("http://127.0.0.1:8000/auth/attend/").then((response) => {
      setAttendDate([...response.data]);
    });
    if (attendDate.lengh < 1) {
      setAttendDate(dummy_checked_date2);
    }
  };

  useEffect(() => {
    attendDatesForCalendar();
  });

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/calendar"
          element={<CalendarPage checked_date={attendDate} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
