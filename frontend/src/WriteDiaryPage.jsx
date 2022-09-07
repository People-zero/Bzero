import { useState } from "react";
import "./css/WriteDiaryPage.css";
import arrow_svg from "./images/left_arrow.svg";
import image_icon_svg from "./images/image_icon.svg";
import axios from "axios";
import CalendarNav from "./components/CalendarNav";
import { useEffect } from "react";
const WriteDiaryPage = ({userdata})=> {
  const [image, setImage] = useState();
  const [userid,setuserid]=useState();

  useEffect(()=>{
    setuserid(userdata[0]?.id)
    console.log(userdata)
  },[userdata])
  const [diaryData, setDiaryData] = useState({
    title: "",
    text: "",
  });
  
  const upload_image = ({ target: { files } }) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
     
  };

  const onSubmit = () => {
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
    const PostData = {
      category: 1,
      title: diaryData["title"],
      content: diaryData["text"],
      image: null,
    };
    fetch("http://127.0.0.1:8000/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ".concat(localStorage.getItem("token")),
      },
      body: JSON.stringify(PostData),
    })  
      .then((res) => res.json())
      .then(() => {
        
      });

  };
  const onCancel = () => {
    //뒤로가기
  };

  const getDate = () => {
    const current = new Date();
    return `${current.getFullYear().toString()}.${
      current.getMonth() > 10
        ? current.getMonth()
        : "0" + current.getMonth().toString()
    }.${
      current.getMonth() > 10
        ? current.getDay()
        : "0" + current.getDay().toString()
    }`;
  };
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
          <p className="input_header_timestamp">{getDate()}</p>
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
