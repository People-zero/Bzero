import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PostStateContext, PostDispatchContext } from "./App";
import "./Post.css";
import axios from "axios";
import { normalizeUnits } from "moment";

const sortOptionList = [
  { value: "카테고리", name: "카테고리" },
  { value: 1, name: "전체" },
  { value: 2, name: "함께해요" },
  { value: 3, name: "궁금해요" },
  { value: 4, name: "인증사진" },
  { value: 5, name: "정보광장" },
];

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      className="Post_ControlMenu"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => (
        <option key={idx} value={it.value}>
          {it.name}
        </option>
      ))}
    </select>
  );
};

const Post = () => { 

  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    setData(data);
  }, [data]);

  const titleRef = useRef();
  const postRef = useRef();
  const [title, setTitle] = useState("");
  const [post, setPost] = useState("");

  const [curDate, setCurDate] = useState(new Date());
  const nowday = `${curDate.getFullYear()}.${
    curDate.getMonth() + 1
  }.${curDate.getDate()}`;

  const [sortType, setSortType] = useState("카테고리");

  const { id } = useParams();

  const handleSubmit = () => {
    const PostData = {
      category: sortType,
      title: title,
      content: post,
      image: null,
    };
    fetch("http://127.0.0.1:8000/post/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Token ".concat(localStorage.getItem("token")),
    },
    body: JSON.stringify(PostData),
  }).then((res) => res.json())
  .then(()=>{
    window.location.replace('http://localhost:3000/community')
  })
  };

  return (
    <div className="Post">
      <div className="Post_header">
        <div className="Post_header_title">B ZERO</div>
        <div className="Post_header_right">
          <div>가게 찾기</div>
          <div className="Post_header_right_com">커뮤니티</div>
          <div>마이페이지</div>
        </div>
      </div>
      <div className="Post_body">
        <div className="Post_body_1">
          <div className="Post_body_1_title">
            카테고리{" "}
            <ControlMenu
              className="Post_body_1_title_catagory"
              value={sortType}
              onChange={setSortType}
              optionList={sortOptionList}
            />
          </div>
          <div className="Post_body_1_nowday">{nowday}</div>
        </div>
        <div className="Post_body_2">
          <input
            className="Post_body_2_title"
            ref={titleRef}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력해주세요."
          ></input>
          <textarea
            className="Post_body_2_post"
            ref={postRef}
            value={post}
            onChange={(e) => setPost(e.target.value)}
            placeholder="내용을 입력해주세요."
          ></textarea>
          <div className="Post_body_2_img">
            <img
              className="Post_body_2_imgss"
              src={process.env.PUBLIC_URL + `/icon/image.png`}
            />
            <div className="Post_body_2_imgs">이미지 첨부</div>
          </div>
        </div>
        <div className="Post_body_3">
          <div className="Post_body_3_exit">
            <img
              className="Post_body_3_exit_imgs"
              src={process.env.PUBLIC_URL + `/icon/direction.png`}
            />
            <button onClick={() => navigate(-1)}>나가기</button>
          </div>
          <div className="Post_body_3_create">
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              작성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
