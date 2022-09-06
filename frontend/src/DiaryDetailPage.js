import "./css/DiaryDetailPage.css";
import MypageNav from "./components/MypageNav";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DiaryDetailPage = ({ dummy_diary }) => {
  const { date } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isPrev, setIsPrev] = useState("");
  const [isNext, setIsNext] = useState("");

  useEffect(() => {
    console.log(dummy_diary);
    if (dummy_diary.length >= 1) {
      const targetDiary = dummy_diary.find(
        (it) => it.created_at.slice(0, 10) === date
      );

      console.log("a");
      console.log(targetDiary);

      if (targetDiary) {
        setData(targetDiary);
      }

      const prev_diary = dummy_diary.find((it) => it.id === targetDiary.id - 1);
      console.log(prev_diary);
      if (prev_diary) {
        setIsPrev(prev_diary.created_at.slice(0, 10));
        console.log("p", prev_diary);
      } else {
        setIsPrev("");
      }
      const next_diary = dummy_diary.find((it) => it.id === targetDiary.id + 1);
      console.log(next_diary);
      if (next_diary) {
        setIsNext(next_diary.created_at.slice(0, 10));
        console.log("n", isNext);
      } else {
        setIsNext("");
      }
    }
  }, [date, isPrev, isNext]);
  console.log(data);
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
            {dummy_diary
              .filter((x) => x.created_at.slice(0, 10) === date)
              .map((it) => (
                <div>
                  <div className="diary_detail_top">
                    <div className="diary_detail_date">
                      <p className="diary_detail_post_date">
                        {it.created_at.slice(0, 10)}
                      </p>
                    </div>
                    <div className="diary_detail_post_title">{it.title}</div>

                    <div className="diary_detail_post_detail">
                      <div className="diary_detail_post_edit">
                        <button>수정하기</button>
                        <button>삭제하기</button>
                      </div>
                    </div>
                  </div>
                  <div className="diary_detail_content_box">
                    <div className="diary_detail_content">{it.content}</div>
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
