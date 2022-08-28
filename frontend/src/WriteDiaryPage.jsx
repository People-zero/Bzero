import { useState } from "react";
import "./css/WriteDiaryPage.css";
import arrow_svg from "./images/left_arrow.svg";
import image_icon_svg from "./images/image_icon.svg";

function WriteDiaryPage() {
  const [image, setImage] = useState();
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
    //제출코드
  };
  const onCancel = () => {
    //뒤로가기
  };
  return (
    <div className="write_diary_page">
      <div className="header">
        <p className="page_title">제로웨이스트 일기</p>
        <p className="tip">
          오늘 행동했던 제로웨이스트 활동을 일기로 작성해보세요.
        </p>
      </div>
      <div className="main_body">
        <div className="input_header_div">
          <p className="input_header_title">오늘의 일기 작성</p>
          <p className="input_header_timestamp">2022.08.08</p>
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
          <button className="submit_btn">
            <p>작성하기</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default WriteDiaryPage;
