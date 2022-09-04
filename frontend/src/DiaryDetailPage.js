import "./css/DiaryDetailPage.css";

// import DiaryDetailEx from "./components/DiaryDetailEx";
import MypageNav from "./components/MypageNav";
import { useRef, useState } from "react";

const DiaryDetailPage = ({ dummy_diary }) => {
  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    // if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
    //   onRemove(id);
    // }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    // setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`일기를 수정하시겠습니까?`)) {
      //   onEdit(id, localContent);
      toggleIsEdit();
    }
  };
  return (
    <div className="diary_detail">
      <MypageNav />
      <div className="diary_detail_main">
        <div className="diary_detail_head">
          <p className="diary_detail_title">제로웨이스트 일기</p>
        </div>
        <div className="diary_detail_body">
          {dummy_diary
            .filter((x) => x.date === "2022-09-01")
            .map((it) => (
              <div>
                <div className="diary_detail_top">
                  <div className="diary_detail_date">
                    <p className="diary_detail_post_date">{it.date}</p>
                  </div>
                  <div className="diary_detail_post_title">{it.title}</div>
                  <div className="diary_detail_diary_info">
                    <div className="diary_detail_author_profile">
                      <img
                        src={process.env.PUBLIC_URL + `/img/${it.profile}`}
                        alt="profile"
                      ></img>
                    </div>
                    <div className="diary_detail_author_post_info">
                      <div className="diary_detail_author">
                        <p> {it.user}</p>
                      </div>
                      <div className="diary_detail_post_detail">
                        <div className="diary_detail_post_edit">
                          {isEdit ? (
                            <>
                              <button onClick={handleQuitEdit}>수정취소</button>
                              <button onClick={handleEdit}>수정완료</button>
                            </>
                          ) : (
                            <>
                              <button onClick={handleRemove}>삭제하기</button>
                              <button onClick={toggleIsEdit}>수정하기</button>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="diary_detail_post_box">
                  <div className="diary_detail_post">{it.post}</div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DiaryDetailPage;
