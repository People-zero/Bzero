import "./Details.css";
import { PostStateContext } from "./App";
import { useContext, useParams, useEffect, useState, useRef } from "react";
import { useLocation } from "react-router";
import axios from "axios";
const emotionLists = ["전체", "함께해요", "궁금해요", "인증사진", "정보광장"];


const Details = () => {

  useEffect(() => {
    const userdata = async () => {
      let token = localStorage.getItem("token");
      let token2 = "Token ".concat(token);
      const res = await fetch("http://127.0.0.1:8000/auth/accounts", {
        method: "GET",
        headers: {
          Authorization: "Token ".concat(token),
        },
      }).then((res) => res.json());
      SetUser(res)
      const res2 = await fetch(`http://127.0.0.1:8000/post/detail/${state.id}`, {
        method: "GET",
        headers: {
          Authorization: "Token ".concat(token),
        },
      }).then((res2) => res2.json());
      console.log(res2[0])
      Setcommentdata([...res2[0].comment_set]);
    };
    userdata();
  }, []);

  const [comentdata, Setcommentdata] = useState([]);
  const [user, SetUser] = useState({});
  const { state } = useLocation();
  // console.log(state)
  console.log(user)

  const [comment, Setcomment] = useState("");

  const commentpost = (e) => {
    if (e.key === "Enter") {
      if (e.value !== "") {
        Setcomment(comment);
        pushcommentdata(comment)
      }
    }
  };

  const pushcommentdata = async (data) => {
    const commentapidata = {content:data};
    const onecomment = await  fetch(`http://127.0.0.1:8000/post/detail/${state.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ".concat(localStorage.getItem("token")),
      },
      body: JSON.stringify(commentapidata),
    }).then(()=>{
      window.location.replace(`http://localhost:3000/details/${state.id}`)
    })
  };

  const times = () => {
    const nowday = new Date();
    const nowdays = `${nowday.getFullYear()}.${
      nowday.getMonth() + 1
    }.${nowday.getDate()}`;
    return nowdays;
  };

  const detailsdelete = async () => {
    const delcomment = await fetch(
      `http://127.0.0.1:8000/post/detail/retrieve/${state.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Token ".concat(localStorage.getItem("token")),
        },
      }
        ).then(() => {
      window.location.replace("http://localhost:3000/community");
    });
  }

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
            커뮤니티 &gt;
            <div className="Details_Body_1_route_s">
              {" "}
              {emotionLists[state.emotion - 1]}
            </div>
          </div>
        </div>
        <div className="Details_Body_2">
          <div className="Details_Body_2_title">{state.title}</div>
          <div className="Details_Body_2_delete">
            <button className="Details_Body_2_delete_delete"
            onClick={detailsdelete}>삭제하기</button>
          </div>
        </div>
        <div className="Details_Body_3">
          <div className="Details_Body_3_user">{user[0]?.username}</div>
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
            댓글 {comentdata.length}
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
          {comentdata.map((commentArr, i) => {
            return (
              <span key={i} className="Details_Body_6_commentlist">
                <div className="Details_Body_6_commentlist_user">
                  {user[0]?.username}
                </div>
                <div className="Details_Body_6_commentlist_comment">
                  {commentArr.content}
                </div>
                <div className="Details_Body_6_commentlist_time"></div>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Details;
