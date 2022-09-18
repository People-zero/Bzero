import "./css/Details.css";
import { PostStateContext } from "./App";
import React, { useContext, useParams, useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import axios from "axios";
const emotionLists = ["전체", "함께해요", "궁금해요", "인증사진", "정보광장"];


const Details = () => {
  const navigate=useNavigate();
  useEffect(() => {
    const userdata = async () => {
      let token = localStorage.getItem("token");
      let token2 = "Token ".concat(token);
      const res = await fetch("https://bzeroo.herokuapp.com/https://bzero.tk/auth/accounts", {
        method: "GET",
        headers: {
          Authorization: "Token ".concat(token),
        },
      }).then((res) => res.json());
      SetUser(res)
      const res2 = await fetch(`https://bzeroo.herokuapp.com/https://bzero.tk/post/detail/${state.id}`, {
        method: "GET",
        headers: {
          Authorization: "Token ".concat(token),
        },
      }).then((res2) => res2.json());
      
      Setimage(res2[0]?.image)
      Setcommentdata([...res2[0].comment_set]);
    };
    userdata();
  }, []);

  const [image, Setimage] = useState();
  const [comentdata, Setcommentdata] = useState([]);
  const [user, SetUser] = useState({});
  const { state } = useLocation();
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
    const onecomment = await  fetch(`https://bzeroo.herokuapp.com/https://bzero.tk/post/detail/${state.id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ".concat(localStorage.getItem("token")),
      },
      body: JSON.stringify(commentapidata),
    }).then(()=>{
      window.location.reload()
    })
  };



  const detailsdelete = async () => {
    const delcomment = await fetch(
      `https://bzeroo.herokuapp.com/https://bzero.tk/post/detail/retrieve/${state.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: "Token ".concat(localStorage.getItem("token")),
        },
      }
        ).then(() => {
       navigate("https://bzero.cf/community");
    });
  }


  return (
    <div className="Details">
      <div className="Details_header">
        <img
          className="Community_header_title_img"
          src={process.env.PUBLIC_URL + `/img/로고 파랑 2.png`}
        />
        <div style={{cursor:"pointer"}}onClick={()=>{navigate('/main')}} className="Details_header_title" on>BZero</div>
        <div className="Details_header_right">
          <div style={{cursor:"pointer"}}onClick={()=>{navigate('/map')}}>가게 찾기</div>
          <div style={{cursor:"pointer"}}onClick={()=>{navigate('/community')}}  className="Details_header_right_community">커뮤니티</div>
          <div style={{cursor:"pointer"}}onClick={()=>{navigate('/mypage')}} >마이페이지</div>
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
            <button
              className="Details_Body_2_delete_delete"
              onClick={detailsdelete}
            >
              삭제하기
            </button>
          </div>
        </div>
        <div className="Details_Body_3">
          <div className="Details_Body_3_user">{state.author}</div>
          <div className="Details_Body_3_imgs"> 
          </div>
        </div>
        <div className="Details_Body_4">
        {image === null ? <div></div> : <img
              className="Details_Body_4_img"
              src={` https://bzero.tk/${image}`}
            />}
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
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default React.memo(Details);
