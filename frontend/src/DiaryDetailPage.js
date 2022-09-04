import "./css/DiaryDetailPage.css";
import MypageNav from "./components/MypageNav";
import { useParams } from "react-router-dom";

const DiaryDetailPage = ({ dummy_diary }) => {
  const { date } = useParams();

  return (
    <div className="diary_detail">
      <MypageNav />
      <div className="diary_detail_main">
        <div className="diary_detail_head">
          <p className="diary_detail_title">제로웨이스트 일기</p>
        </div>
        <div className="diary_detail_body">
          <div className="diary_detail_prev_diary">
            <button className="diary_detail_prev_btn">
              <img src={process.env.PUBLIC_URL + `/img/prev.png`} />
            </button>
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
            <button className="diary_detail_next_btn">
              <img src={process.env.PUBLIC_URL + `/img/next.png`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiaryDetailPage;
