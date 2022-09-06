import "./Details.css";
import { PostStateContext } from "./App";
import { useContext, useParams, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const Details = () => {

  const getApi = async () => {

    //데이터 가져 오기
    // const res = await fetch("http://127.0.0.1:8000/post/detail/1").then((res) =>
    //   res.json()
    // );
    // console.log(res);
  };

  useEffect(() => {
    getApi();
  }, []);

  const { state } = useLocation();
  console.log(state)


  const [comment, Setcomment] = useState("");
  const [commentList, SetcommentList] = useState([]);

  const commentpost = (e) => {
    if (e.key === "Enter") {
      SetcommentList([comment, ...commentList]);
    }
  };

  const times = () => {
    const nowday = new Date();
    const nowdays = `${nowday.getFullYear()}.${
      nowday.getMonth() + 1
    }.${nowday.getDate()}`;
    return nowdays;
  };

  useEffect(() => {
    Setcomment("");
  }, [commentList]);

  return (
    <div className="Details">
      <div className="Details_header">
        <div className="Details_header_title">B ZERO</div>
        <div className="Details_header_right">
          <div>가게 찾기</div>
          <div className="Details_header_right_community">커뮤니티</div>
          <div>마이페이지</div>
        </div>
      </div>
      <div className="Details_Body">
        <div className="Details_Body_1">
          <div className="Details_Body_1_route">
            커뮤니티 &gt;<div className="Details_Body_1_route_s"> 궁금해요</div>
          </div>
        </div>
        <div className="Details_Body_2">
          <div className="Details_Body_2_title">{state.title}</div>
        </div>
        <div className="Details_Body_3">
          <div className="Details_Body_3_user">{state.user}</div>
          <div className="Details_Body_3_imgs">
            <img
              className="Details_Body_3_imgs_imgs1"
              src={process.env.PUBLIC_URL + `/icon/Good.png`}
            />
            <img
              className="Details_Body_3_imgs_imgs2"
              src={process.env.PUBLIC_URL + `/icon/Pin.png`}
            />
          </div>
        </div>
        <div className="Details_Body_4">
          <div className="Details_Body_4_post">{state.content}</div>
        </div>
        <div className="Details_Body_5">
          <div className="Details_Body_5_answer">
            <img
              className="Details_Body_3_imgs_imgs2"
              src={process.env.PUBLIC_URL + `/icon/coment.png`}
            />
            댓글 {commentList.length}
          </div>
          <input
            className="Details_Body_5_answers"
            placeholder="댓글을 남겨보세요."
            onChange={(e) => {
              Setcomment(e.target.value);
            }}
            onKeyPress={(e) => {
              commentpost(e);
            }}
            value={comment}
          ></input>
        </div>
        <div className="Details_Body_6">
          {commentList.map((commentArr, i) => {
            return (
              <span key={i} className="Details_Body_6_commentlist">
                <div className="Details_Body_6_commentlist_user">
                  {state.user}
                </div>
                <div className="Details_Body_6_commentlist_comment">
                  {commentArr}
                </div>
                <div className="Details_Body_6_commentlist_time">{times()}</div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
