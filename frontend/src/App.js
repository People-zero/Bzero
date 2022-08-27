import "./CalendarPage.css";
import CalendarPage from "./CalendarPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const dummy_checked_date = [
  "2022-08-01",
  "2022-08-05",
  "2022-08-13",
  "2022-08-30",
];

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/calendar"
          element={<CalendarPage checked_date={dummy_checked_date} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
