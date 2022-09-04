import './BottleStore.css';
import React, { useState,useEffect,useContext,useReducer,useRef } from "react";
import { useNavigate,useParams } from "react-router-dom";
import mainlogo from './images/logo2.svg'
import Vector from './images/Vector.png'
import Vectorbottom from'./images/Vector_bottom.png'
import Vector_left from './images/Vector_left.svg'
import Vector_right from './images/Vector_right.png'
import bottle1 from './images/bottle1.svg'
import bottle2 from './images/bottle2.svg'
import bottle3 from './images/bottle3.svg'
import bottlebox from './images/bottlebox.svg'
import bottletype_rectancle from './images/bottletype_rectangle.png'
import emptystar from './images/emptystar.png'
const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const BottleStore = ({store}) => {
    //console.log(store);

    //const {id} = useParams();
    //const [data,setData] = useState();
    //const navigate = useNavigate();
    const handleSubmit = () => {
      //저장하기
    }
    

    return (
      <div className="BottleStore">
      <div className="bottlestore_navbar_left">
        <div className='bottlestore_navbar_left_title'>
          <p><img src={mainlogo} width='130px'/></p>
        </div>
        <div className='bottlestore_navbar_left_menu'>
          <a href="#">마이페이지</a>
          <a href="#" className='bottlestore_present'>가게 찾기</a>
          <div className="bottlestore_store">
            <a href="#">클린스토어</a>
            <a href="#" className="bottlestore_focus">공병스토어</a>
          </div>
          <a href="#">커뮤니티</a>
          <a href="#">제로웨이스트 일기</a>
        </div>
        <div className='bottlestore_navbar_left_logout'>
          <a href='#'>로그아웃</a>
        </div>
      </div>
      <div className='bottlestore_right'>
        <div className='bottlestore_navbar_top'>
          <div className='bottlestore_text'>
            <span className='bottlestore_title'>공병스토어</span>
          </div>
        </div>
        <div className='bottlestore_main'>
          {store.map((it)=> (
              <>
              <div className='bottlestore_summary'>
                <div className='bottlestore_summary_title'>
                  <p>{it.name}</p>
                  <div className='bottlestore_url'>
                    <button /*onClick={()=>{navigate(`${it.store_url}`)}}*/>
                       <a herf={it.store_url}>관련링크 방문하기</a>
                    <img src={Vector} alt="Vector" /> </button>
                  </div>
                </div>
                <div className='bottlestore_summary_content'>
                  <div className="star">
                    별점 자리

                  </div>
                <p className="bottlestore_info_summary">{it.info_summary}</p>
                <img className="bottlestore_info_photo" src={it.info_photo}/>
                </div>
             </div>   
            <div className="bottlestore_content_group">
                <p className="bottlestore_content_title">
                  <img src={Vectorbottom} width='14px'/>가게 운영 안내</p>
                  <div className="bottlestore_content">
                    <div className="bottlestore_content_left">
                        <div className="content_subtitle">
                          <p>영업 일자 및 시간</p>
                          <p className='another_content'>공병 수거 요일</p>
                          <p className='another_content'>주소</p>
                          <p className='another_content'>문의처</p>
                          </div>
                        <div className='content_subcontent'>
                          <span ><span className='bold'>{it.businessDay}</span> {it.businessHour} </span>   
                          <span ><span className='bold'>{it.dayOff} </span> 휴무</span>
                          <span className='another_content'><span className='bold'>{it.CollectDay}</span>  {it.CollectHour}</span>   
                          <span className='another_content'>{it.address}</span>
                          <span className='another_content'>{it.number}</span>
                    </div>
                    </div>
                
                <div className="bottlestore_content_right">
                    지도 자리
                </div>
                </div>
            </div>
            <div className="bottlestore_content_group">
              <div className='bottlestore_photo_zip'> 
              <img src = {it.photo1}/>
              <img src = {it.photo2}/>
              <img src = {it.photo3}/></div>
                <div className="bottlestore_info_title">{it.info_title}</div>
                <div className="bottlestore_info_content">{it.info}</div>
            </div>
            <div className="bottlestore_content_group">
            <p className="bottlestore_content_title"> 
            <img src={Vectorbottom} />수거하는 공병</p>
            <div className='bottlestore_content_body'>
              <div className='bottlestore_bottletype'>
                <span className='bottlestore_bottletype_text'>페트병</span>
                <span className='bottlestore_bottletype_text'>페트병</span>
                <span className='bottlestore_bottletype_text'>페트병</span>
                <span className='bottlestore_bottletype_text'>페트병</span>
                <div className='bottlestore_bottletype_pic'>
                  <div className='bottlestore_bottletype_bottle'>
                      <img src={bottle1}   width='100px'/>
                      <img src={bottle2}width='100px'/>
                      <img src={bottle3}width='135px'/>
                  </div>
                  <div className='bottlestore_bottletype_box'>
                    <img src={bottlebox}/>
                  </div>
                </div>
              </div>
            </div>
              </div>
            <div className="bottlestore_content_group">
              <p className="bottlestore_content_title"> 
            <img src={Vectorbottom} />수거하는 공병</p>
            <div className='bottlestore_content_body'>
              {/*<div className='bottlestore_slide'>
                <button><img src={Vector_left}/></button>
                <button><img src={Vector_right}/></button>
          </div>*/}
              <div className='bottlestore_bottledetail'>    
              <div className='bottlestore_bottledeail_content'>
                <img src={bottletype_rectancle}/>
                <p>페트병</p>
                </div>
                <div className='bottlestore_bottledeail_content'>
                <img src={bottletype_rectancle}/>
                <p>페트병</p>
                </div>
                <div className='bottlestore_bottledeail_content'>
                <img src={bottletype_rectancle}/>
                <p>페트병</p>
                </div>
                <div className='bottlestore_bottledeail_content'>
                <img src={bottletype_rectancle}/>
                <p>페트병</p>
                </div>
              </div>              
              </div>
              </div>
              <div className="bottlestore_content_group">
            <p className="bottlestore_content_title"> 
            <img src={Vectorbottom} /> 리뷰({/*ReviewCount*/})</p>
            {/*수정중*/}
              </div>
            </>
            ))}
            <div className="bottlestore_content_group">
            <p className="bottlestore_content_title"> 리뷰 작성</p>
              <div className='bottlestore_review'>
                <h3>이 스토어를 추천하시겠어요?</h3>
                    <div className="bottlestore_star">
                      <img src={emptystar}/><img src={emptystar}/><img src={emptystar}/><img src={emptystar}/><img src={emptystar}/>
                    </div>
                    <textarea placeholder="리뷰를 작성해주세요." />
                {/*<button className="write_button" onClick={handleSubmit}>
                    작성하기
        </button>*/}
                </div>      
              </div>
        </div>
</div>
</div>
    );
};

export default BottleStore;