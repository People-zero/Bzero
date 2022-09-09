import "./css/DiaryDetailPage.css";
import MypageNav from "./components/MypageNav";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const DiaryDetailPage = ({ diary_detail_post }) => {
  const { date } = useParams();

  const [data, setData] = useState([]);

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(data.content);
  const localContentInput = useRef();

  const handleRemove = () => {
    console.log(data.id);
    if (window.confirm(`일기를 정말 삭제하시겠습니까?`)) {
      axios
        .delete(` http://127.0.0.1:8000/post/detail/retrieve/${data.id}`, {
          headers: {
            Authorization: "Token ".concat(localStorage.getItem("token")),
          },
        })
        .then(window.location.replace("/calendar"));
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(data.content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`일기를 수정하시겠습니까?`)) {
      // axios.put;
      toggleIsEdit();
    }
  };

  useEffect(() => {
    if (diary_detail_post.length >= 1) {
      const targetDiary = diary_detail_post.find(
        (it) => it.date.slice(0, 10) === date
      );
      console.log(targetDiary);

      if (targetDiary) {
        setData(targetDiary);
        console.log("target", targetDiary);
      }
    }
  }, [date, diary_detail_post]);

  return (
    <div className="diary_detail">
      <MypageNav />
      <div className="diary_detail_main">
        <div className="diary_detail_head">
          <p className="diary_detail_title">제로웨이스트 일기</p>
        </div>
        <div className="diary_detail_body">
          <div className="diary_detail_post">
            {diary_detail_post
              .filter((x) => x.date.slice(0, 10) === date)
              .map((it) => (
                <div>
                  <div className="diary_detail_top">
                    <div className="diary_detail_date">
                      <p className="diary_detail_post_date">
                        {it.date.slice(0, 10)}
                      </p>
                    </div>
                    <div className="diary_detail_post_title">{it.title}</div>

                    <div className="diary_detail_post_detail">
                      <div className="diary_detail_post_edit">
                        {isEdit ? (
                          <>
                            <button onClick={handleQuitEdit}>수정취소</button>
                            <button onClick={handleEdit}>수정완료</button>
                          </>
                        ) : (
                          <>
                            <button onClick={toggleIsEdit}>수정하기</button>
                            <button onClick={handleRemove}>삭제하기</button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="diary_detail_content_box">
                    <div className="diary_detail_content">
                      {isEdit ? (
                        <>
                          <textarea
                            ref={localContentInput}
                            value={localContent}
                            onChange={(e) => setLocalContent(e.target.value)}
                          />
                        </>
                      ) : (
                        <>
                          <p>{it.content}</p>
                          <div>
                            <img src={it.image} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryDetailPage;
