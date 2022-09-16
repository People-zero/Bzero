import './css/BottleStore.css';
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
import MapNav from './components/MapNav'
import Point from './components/Point';
const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";

const BottleStore = ({place}) => {
  const [store,setstore]=useState()
    const {id} = useParams(); 
    const [eday,setday]=useState([]);
  const { kakao } = window;
  useEffect(()=>{
    var mapContainer = document.getElementById('bottle_map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(store?.store_longtitude, store?.store_latitude), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(store?.store_longtitude, store?.store_latitude); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
    position: markerPosition
});
function setZoomable(zoomable) {
  // 마우스 휠로 지도 확대,축소 가능여부를 설정합니다
  map.setZoomable(zoomable);    
}
// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
  },[store])
    //console.log(store);
    
    //const [data,setData] = useState();
    //const navigate = useNavigate();
    
    const handleSubmit = () => {
      //저장하기
      
    }
    const getpost = async () => {
      const res = await fetch(`https://bzeroo.herokuapp.com/https://bzero.tk/store/bottle_collection_Store/${id}/`).then((res) =>
        res.json()
      );
      // console.log(res); // 500개의 데이터
  
     
  
      setstore(res);
      
      setday(res?.pickup_day?.split(","))
      
    };
    useEffect(()=>{
    getpost();
    },[])
    
    

    

    const [point,setpoint] = useState(0);

    const getPoint= (point) =>{ 
      setpoint(point);
    } 
    
    

    return (
      <div className="BottleStore">
      <MapNav></MapNav>


      <div className='bottlestore_right'>
        <div className='bottlestore_navbar_top'>
          <div className='bottlestore_text'>
            <span className='bottlestore_title'>공병스토어</span>
          </div>
        </div>
        <div className='bottlestore_main'>
         
              <>
              <div className='bottlestore_summary'>
                <div className='bottlestore_summary_title'>
                  <p>{store?.store_name}</p>
                  <div className='bottlestore_url'>
                    <button /*onClick={()=>{navigate(`${it.store_url}`)}}*/>
                       <a href={store?.store_url}>관련링크 방문하기
                    <img src={Vector} alt="Vector" /></a></button>
                  </div>

                </div>
                <div className='bottlestore_photo_zip'> 
              <img src = {store?.store_image}/>
              <div>
                {store?.description}
              </div>
              </div>  
              
                
             </div>   
            <div className="bottlestore_content_group">
                <p className="bottlestore_content_title">
                  <img src={Vectorbottom} width='14px'/>가게 운영 안내</p>
                  <div className="bottlestore_content">
                    <div className="bottlestore_content_left">
                        <div className="content_subtitle">
                          <p>오픈 시간</p>
                          <p className='another_content'>공병 수거 요일</p>
                          <p className='another_content'>주소</p>
                          <p className='another_content'>문의처</p>
                          </div>
                        <div className='content_subcontent'>
                          {/* <span ><span className='bold'>{store.businessDay}</span> {store.businessHour} </span>    */}
                          {/* <span ><span className='bold'>{store.dayOff} </span> 휴무</span> */}
                          
                          <span className='another_content'>{store?.opening_time  }</span>
                          <div className='store_day'>
                            {eday.map((it)=>(
                              <div className='store_day_select'>
                                <div>{it}</div>
                              </div>
                            )

                            )}
                          </div>
                          <span className='another_content'>{store?.address}</span>
                          <span className='another_content'>{store?.telephone}</span>
                    </div>
                    </div>
                
                <div className="bottlestore_map" id='bottle_map'>
                    지도 자리
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

              {store?.bottle_kind?.split(",").map((it)=>(
                <div className='bottle_view'>
                <div className='bottlestore_bottledeail_content'>
                {
                it==='소형 및 중형'
                ?<img src={process.env.PUBLIC_URL+`../img/Group 1182 (5).png`}/>
                :null
              }
              {
                it==='대형 및 유류 정종'
                ?<img className="oil_image"src={process.env.PUBLIC_URL+`../img/Group 1182 (2).png`}/>
                :null
              }
              {
                it==='화장품 및 기타 공병'
                ?<img className="beauty_image"src={process.env.PUBLIC_URL+`../img/화장품병.png`}/>
                :null
              }
               
               
                </div>
                <p>{it} </p>
                </div>
              ))}   
              {/* <div className='bottlestore_bottledeail_content'>
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
                </div> */}
                
              </div>              
              </div>
              </div>
              
            </>
            
            
        </div>
</div>
</div>
    );
};

export default BottleStore;