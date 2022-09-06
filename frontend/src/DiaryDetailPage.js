import "./css/DiaryDetailPage.css";
import MypageNav from "./components/MypageNav";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

const DiaryDetailPage = ({ diary_detail_post }) => {
  const { date } = useParams();
  const [diaryDetailId, setDiaryDetailId] = useState([]);
  const [idxValue, setIdxValue] = useState(1);
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isPrev, setIsPrev] = useState("");
  const [isNext, setIsNext] = useState("");

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(data.content);
  const localContentInput = useRef();
  // const idx_value = useRef(0);

  const handleRemove = () => {
    if (window.confirm(`일기를 정말 삭제하시겠습니까?`)) {
      // onRemove(id);
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
      // onEdit(id, localContent);
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
  }, [date, diary_detail_post, navigate]);
  console.log("diary_detail_post", diary_detail_post);

  // if (diary_detail_post.length >= 1) {
  //   const targetDiary = diary_detail_post.find(
  //     (it) => it.date.slice(0, 10) === date
  //   );

  //   if (targetDiary) {
  //     setData(targetDiary);
  //     console.log("target", targetDiary);
  //   }
  // }

  // console.log("idxv", idxValue);
  // for (const value of diary_detail_post) {
  //   diary_detail_id.push({ idx: idx_value.current, id: value.id });
  //   idx_value.current += 1;
  //   // const detail = { idx: idx_value.current, id: value.id };
  //   // setDiaryDetailId({ ...diaryDetailId, detail });
  //   // setIdxValue(idxValue + 1);
  // }
  // console.log("did", diary_detail_id);
  // console.log("data", data);

  // const target_id = diary_detail_id.find((it) => it.id === data.id);
  // console.log("tidx", target_id);

  // if(diary_detail_id.find((x)=>x.idx === target_id.idx + 1)){
  //   const prev_id = diary_detail_id.find((it) => it.idx === target_id.idx + 1);
  // console.log("pidx", prev_id);
  // }

  // const prev_id = diary_detail_id.find((it) => it.idx === target_id.idx + 1);
  // console.log("pidx", prev_id);

  // const next_id = diary_detail_id.find((it) => it.idx === target_id.idx - 1);
  // console.log("nidx", next_id);

  // if (prev_id) {
  //   const prev_diary = diary_detail_post.find((it) => it.id === prev_id.id);
  //   console.log("pdiary", prev_diary);

  //   setIsPrev(prev_diary.date.slice(0, 10));
  //   console.log("isp", isPrev);
  // }

  //   const target_id = diaryDetailId.find((it) => it.id === data.id);
  //   console.log("tidx", target_id.idx);
  //   const prev_id = diaryDetailId.find((it) => it.idx === target_id.idx + 1);
  //   // setPrevId(prev_id);

  //   const prev_diary = diary_detail_post.find((it) => it.id === prev_id.id);
  //   if (prev_diary) {
  //     setIsPrev(prev_diary.date.slice(0, 10));
  //     console.log("isp", isPrev);
  //     console.log("p", prev_diary);
  //   } else {
  //     setIsPrev("");
  //   }

  //   // 다음 일기

  //   const next_id = diaryDetailId.find((it) => it.idx === target_id.idx - 1);
  //   const next_diary = diary_detail_post.find((it) => it.id === next_id.id);
  //   if (next_diary) {
  //     setIsNext(next_diary.date.slice(0, 10));
  //     console.log("isn", isNext);
  //     console.log("n", next_diary);
  //   } else {
  //     setIsNext("");
  //   }

  // console.log("data", data);

  const edit_diary = () => {};

  const delete_diary = () => {};

  return (
    <div className="diary_detail">
      <MypageNav />
      <div className="diary_detail_main">
        <div className="diary_detail_head">
          <p className="diary_detail_title">제로웨이스트 일기</p>
        </div>
        <div className="diary_detail_body">
          <div className="diary_detail_prev_diary">
            {isPrev ? (
              <>
                <button
                  className="diary_detail_prev_btn"
                  onClick={() => navigate(`/diary_detail/${isPrev}`)}
                >
                  <img src={process.env.PUBLIC_URL + `/img/prev.png`} />
                </button>
              </>
            ) : (
              <>
                <button className="diary_detail_prev_btn_not">
                  <img src={process.env.PUBLIC_URL + `/img/prev_not.png`} />
                </button>
              </>
            )}
          </div>
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
                            <button onClick={handleRemove}>삭제하기</button>
                            <button onClick={toggleIsEdit}>수정하기</button>
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
                        <>{it.content}</>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="diary_detail_next_diary">
            {isNext ? (
              <>
                <button
                  className="diary_detail_next_btn"
                  onClick={() => navigate(`/diary_detail/${isNext}`)}
                >
                  <img src={process.env.PUBLIC_URL + `/img/next.png`} />
                </button>
              </>
            ) : (
              <>
                <button className="diary_detail_next_btn_not">
                  <img src={process.env.PUBLIC_URL + `/img/next_not.png`} />
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryDetailPage;
