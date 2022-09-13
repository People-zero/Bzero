import { useState } from "react";
import "./css/WriteDiaryPage.css";
import arrow_svg from "./images/left_arrow.svg";
import image_icon_svg from "./images/image_icon.svg";
import axios from "axios";
import CalendarNav from "./components/CalendarNav";
import { useEffect } from "react";
function dateFormat(date) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  second = second >= 10 ? second : '0' + second;

  return date.getFullYear() + '-' + month + '-' + day 
}
const WriteDiaryPage = ({userdata})=> {
  const [image, setImage] = useState(null);
  const [userid,setuserid]=useState();
  const [profileImage,setprofileImage]=useState();
  useEffect(()=>{
    setuserid(userdata[0]?.id)
    console.log(userdata)
  },[userdata])
  const [diaryData, setDiaryData] = useState({
    title: "",
    text: "",
    
  });
  const current_time = new Date();
  const upload_image = ({ target: { files } }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
     
  };
  const convertURLtoFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    const ext = url.split(".").pop(); // url 구조에 맞게 수정할 것
    const filename = url.split("/").pop(); // url 구조에 맞게 수정할 것
    const metadata = { type: `image/${ext}` };
    return File([data], filename, metadata);
  };
  
  const onSubmit = () => {
    console.log(userdata[0])
    console.log(dateFormat(new Date()))
    console.log(typeof((new Date())))
    // const API_URL = "http://127.0.0.1:8000/post/";
    // console.log(userid)
    // axios
    //   .post(API_URL, {
        
    //     category: 1,
    //     title: diaryData["title"],
    //     content: diaryData["text"],
    //     image: image,
        
        
    //   },
    //   {
    //     "Content-Type":"application/json",
    //     Authorization: "Token ".concat(localStorage.getItem("token"))
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });
    
   
    fetch("http://127.0.0.1:8000/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ".concat(localStorage.getItem("token")),
      },
      body: JSON.stringify({
        category: 1,
        title: diaryData["title"],
        content: diaryData["text"],
        image: image,
      }),
    })
  
    axios.patch(`http://127.0.0.1:8000/auth/accounts/${userid}/`
    ,{
    
      point:userdata[0]?.point+100,
    },{headers: {
      Authorization: "Token ".concat(localStorage.getItem("token")),
    }})
   
    // window.location.replace('http://localhost:3000/calendar')
    // fetch("http://127.0.0.1:8000/auth/attend/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: "Token ".concat(localStorage.getItem("token")),
    //   },
    //   body: JSON.stringify({
    //     username:userdata[0]?.profile?.username,
    //     attended_date:dateFormat(new Date())
    //   }),
    // })
   axios.post(`http://127.0.0.1:8000/auth/attend/`
    ,{
    
      username:userdata[0]?.profile?.username,
      attended_date:(new Date().toString())
    },{headers: {
      Authorization: "Token ".concat(localStorage.getItem("token")),
    }})
  };
  const onCancel = () => {
    //뒤로가기
  };

  const getDateString = () => {
    const current_time = new Date();
    return `${current_time.getFullYear()}.${(1+current_time.getMonth()) < 10 ? "0"+(1+current_time.getMonth()) : (1+current_time.getMonth())}.${current_time.getDate() < 10 ? "0"+current_time.getDate() : current_time.getDate()}`;
  }

  return (
    <div className="write_diary_page">
      <CalendarNav></CalendarNav>
      <div className="header">
        <p className="page_title">제로웨이스트 일기</p>
        <p className="tip">
          오늘 행동했던 제로웨이스트 활동을 일기로 작성해보세요.
        </p>
      </div>
      <div className="main_body">
        <div className="input_header_div">
          <p className="input_header_title">오늘의 일기 작성</p>
          <p className="input_header_timestamp">{getDateString()}</p>
        </div>

        <input
          className="diary_title_input"
          placeholder={"제목을 입력해주세요."}
          value={diaryData["title"]}
          onChange={({ target: { value } }) => {
            setDiaryData({ ...diaryData, title: value });
          }}
        />
        <textarea
          className="diary_text_input"
          placeholder={"내용을 입력해주세요."}
          value={diaryData["text"]}
          onChange={({ target: { value } }) => {
            setDiaryData({ ...diaryData, text: value });
          }}
        />
        <label for="images_upload" className="diary_image_input">
          <img src={image_icon_svg} alt="image_icon" />
          {/* <img src={`/static/image_icon.svg`} alt="image_icon" /> */}
          <p>이미지 첨부</p>
        </label>
        <input
          type="file"
          accept="image/jpg,impge/png,image/jpeg"
          id="images_upload"
          className="images_upload"
          onChange={upload_image}
        />
        <div className="diary_buttons">
          <button className="cancel_btn">
            <img src={arrow_svg} alt="left_arrow" />
            {/* <img src={`/static/left_arrow.svg`} alt="left_arrow" /> */}
            <p>작성 취소</p>
          </button>
          <button onClick={onSubmit} className="submit_btn">
            <p>작성하기</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteDiaryPage;
