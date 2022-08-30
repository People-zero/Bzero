import './BottleStore.css';
import React, { useState,useEffect,useContext,useReducer,useRef } from "react";
import { useNavigate,useParams } from "react-router";
import mainlogo from './images/logo2.svg'
import Vector from './images/Vector.png'
import Vectorbottom from'./images/Vector_bottom.png'

const BottleStore = ({store}) => {
    //console.log(store);

    //const {id} = useParams();
    //const [data,setData] = useState();
    //const navigate = useNavigate();

    

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
                    <button>
                       <a herf={it.store_url}>관련링크 방문하기</a>
                    <img src={Vector} alt="Vector" /> </button>
                  </div>
                </div>
                <div className='bottlestore_summary_content'>
                  <div className="star">
                    별점 자리

                  </div>
                <p className="bottlestore_info_summary">{it.info_summary}</p>
                <img className="bottlestore_info_photo" src={it.photo}/>
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
                          <span className='another_content'>{it.inquiries}</span>
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
            {/*수정중*/}
              </div>
            <div className="bottlestore_content_group">
              <p className="bottlestore_content_title"> 
            <img src={Vectorbottom} />수거하는 공병</p>
            {/*수정중*/}
              
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
            {/*수정중*/}
              </div>
   
        </div>
      </div>
      </div>
    );
};

export default BottleStore;