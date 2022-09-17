import { useState, useRef, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./css/Post.css";

const sortOptionList = [
  { value: 6, name: "카테고리" },
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
  const handleSubmit = () => {
    const PostData = {
      category: sortType,
      title: title,
      content: post,
      image: postimg,
    };
    fetch("https://bzeroo.herokuapp.com/https://bzero.tk/post/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Token ".concat(localStorage.getItem("token")),
      },
      body: JSON.stringify(PostData),
    })
      .then((res) => res.json())
      .then(() => {
        // window.location.replace("https://bzero.tk/community");
      });
  };

  const [postimg, setpostimg] = useState()

  const imageuploadbt =  ({ target: { files } }) => {
      const reader = new FileReader();
      reader.onload = () => {
        setpostimg(reader.result);
      };
      reader.readAsDataURL(files[0]); 
    };
  

  return (
    <div className="Post">
      <div className="Post_header">
        <img
          className="Community_header_title_img"
          src={process.env.PUBLIC_URL + `/img/로고 파랑 2.png`}
        />
        <div className="Post_header_title">BZero</div>
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
          <label for="profile_upload" className="Post_body_2_img">
            <img
              className="Post_body_2_imgss"
              src={process.env.PUBLIC_URL + `/icon/image.png`}
            />
            <p>이미지 첨부</p>
            <input
              type="file"
              accept="image/jpg,impge/png,image/jpeg"
              id="profile_upload"
              className="profile_upload"
              onChange={imageuploadbt}
            />
          </label>
        </div>
        <div className="Post_body_3">
          <div className="Post_body_3_exit">
            <button onClick={() => navigate(-1)}>{"<- "}나가기</button>
          </div>
          <div className="Post_body_3_create">
            <button
              onClick={() => {
                handleSubmit(postimg);
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
