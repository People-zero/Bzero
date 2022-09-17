import "./css/Community.css";
import { PostStateContext } from "./App";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import EmotionItem from "./EmotionItem";

const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const emotionList = [
  {
    emotion_id: 1,
    emotion_img: process.env.PUBLIC_URL + `/icon/all.png`,
    emotion_descript: "전체",
  },
  {
    emotion_id: 2,
    emotion_img: process.env.PUBLIC_URL + `/icon/together.png`,
    emotion_descript: "함께해요",
  },
  {
    emotion_id: 3,
    emotion_img: process.env.PUBLIC_URL + `/icon/think.png`,
    emotion_descript: "궁금해요",
  },
  {
    emotion_id: 4,
    emotion_img: process.env.PUBLIC_URL + `/icon/photo.png`,
    emotion_descript: "인증사진",
  },
  {
    emotion_id: 5,
    emotion_img: process.env.PUBLIC_URL + `/icon/imformation.png`,
    emotion_descript: "정보광장",
  },
];



const Community = () => {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState(1);
  const [emotion, setEmotion] = useState(0);
  useEffect(() => {
		// 이미 로그인이 되어있다면 redirect
    if (localStorage.getItem('token') !== null) {
      
      setLoading(true)
    } else {
      setLoading(false);
  
    }
  });
  const handleClickEmote = (emotion) => {
    setEmotion(emotion);
    setFilter(emotion);
  };
  const postto=()=>{
    if(!loading){
      alert("로그인후 이용해주세요")
      window.location.replace("/login")
    }
    else{
    navigate("/post")
  }
  }
  const navigate = useNavigate();
  const PostList = useContext(PostStateContext);
  const [curDate, setCurDate] = useState(new Date());
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(PostList);
  }, [PostList, curDate, filter]);

  const getProcessedPostList = () => {
    const filters = (item) => {
      if (filter === 2) {
        return parseInt(item.emotion) === 2;
      } else if (filter === 3) {
        return parseInt(item.emotion) === 3;
      } else if (filter === 4) {
        return parseInt(item.emotion) === 4;
      } else if( filter === 5 ) {
        return parseInt(item.emotion) === 5;
      }
      return 2 <= parseInt(item.emotion);
    };

    const Searchfilter = (val) => {
      if (searchTerm == "") {
        return val;
      } else if (
        val.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        val.content.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    };

    const copyList = JSON.parse(JSON.stringify(data));
    const filterlist = copyList.filter((it) => filters(it));
    const Searchfilterlist = filterlist.filter((it) => Searchfilter(it));
    return Searchfilterlist;
  };

  return (
    <div className="Community">
      <div className="Community_header">
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
      <div className="Community_body">
        <div className="Community_body_one">
          <div className="Community_body_one_title">커뮤니티</div>
          <div className="Community_body_one_post">
            <button
              className="Community_body_one_posts"
              onClick={()=>postto()}
            >
              글쓰기
              <img
                className="Community_body_one_post_imgs"
                src={process.env.PUBLIC_URL + `/icon/write.png`}
              />
            </button>
          </div>
        </div>
        <div className="Community_body_two">
          <div className="Community_body_two_doing">저 이거 했어요!</div>
          <div className="Community_body_two_share"></div>
        </div>
        <div className="Community_body_three">
          <div className="Community_body_three_mir">
            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/icon/search.png" />
            <input
              className="Community_body_three_serch"
              type="text"
              placeholder="검색어를 입력하세요."
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
            ></input>
          </div>
        </div>
        <div className="Community_body_four">
          <div className="Community_body_four_btns">
            {emotionList.map((it) => (
              <EmotionItem
                key={it.emotion_id}
                {...it}
                onClick={handleClickEmote}
                isSelected={it.emotion_id === emotion}
              />
            ))}
          </div>
          <div className="Community_body_four_right">
            <div className="Community_body_four_postlist">
              {getProcessedPostList().map((it) => (
                <div className="Community_body_four_postlist_s">
                  <div
                    className="Community_body_four_postlist_ss"
                    onClick={() => navigate(`/details/${it.id}`, { state: it })}
                    key={it.id}
                  >
                    <div className="Community_body_four_postlist_ss_title">
                      {it.title}
                    </div>
                    <br />
                    <div className="Community_body_four_postlist_ss_content">
                      {it.content}
                    </div>
                  </div>
                  <div className="Community_body_four_postlist_imgs_date">{it.date.slice(0 , 10)}</div>
                
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
