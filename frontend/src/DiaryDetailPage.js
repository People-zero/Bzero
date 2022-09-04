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
          {dummy_diary
            .filter((x) => x.date === date)
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
                          <button>수정하기</button>
                          <button>삭제하기</button>
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
