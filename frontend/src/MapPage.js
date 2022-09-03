import React, { useEffect, useReducer, useRef, useState } from "react";

import "./css/MapPage.css";
 
import "./css/Mapnav.css";
import MapNav from "./components/MapNav";


const { kakao } = window;

const MapPage = ({place}) => {
    const [count,setcount]=useState(0)
    const localdata=localStorage.getItem
    const [currentday,setcurrentday]=useState(['월','화','수','목','금','토','일'])
    const [where,setwhere]=useState("정릉시장")
    const [currentbottle,setcurrentbottle]=useState(['소형 및 중형','대형 및 유류 정종','화장품 및 기타 공병'])
    

  
    
    
    
//     const place=[{
//         place_name:"하윤집",
//         x:37.6084606,
//         y:127.0094845,
//         day:['월','화','수'],
//         Bottle_kind:['소형 및 중형']
//     },
// {
//     place_name:"축산",
//         x:37.6055906,
//         y:127.0099845,
//         day:['월','화','수','목','금'],
//         Bottle_kind:['소형 및 중형']
// },{place_name:"test",
//         x:37.6064606,
//         y:127.0096845,
//         day:['월','화','수'],
//         Bottle_kind:['소형 및 중형']
// },{
//     place_name:"하윤집s",
//     x:37.6084606,
//     y:127.0073845,
//     day:['월','화','수'],
//     Bottle_kind:['소형 및 중형']
// },
// ]


var map
  useEffect(() => {
    console.log(place[0]?.id)
    // console.log(place);//들어오는 형태 찍어보기

//     axios
//     .get("http://127.0.0.1:8000/store/bottle_collection_Store/")
//     .then((res)=>{
//         setplace([
//             ...res.data]
                
//                 )
//         // console.log(res.data)
//     })
//     .catch((error)=>{
//         console.log(error);
//     })
      
    
            
            var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		    mapOption = {
		        center: new kakao.maps.LatLng(37.56843, 126.97472), // 지도의 중심좌표
		        level: 6, // 지도의 확대 레벨
		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		    }; 

		// 지도를 생성한다 
        
            map=new kakao.maps.Map(mapContainer, mapOption); 
        
       
		
  
        
		


      
		// 마커 이미지의 주소
        
        var ps = new kakao.maps.services.Places(); 
        
        
        
    
    
        // 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
        
        
// 키워드로 장소를 검색합니다

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i=0; i<data.length; i++) {
            // displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}
ps.keywordSearch(where, placesSearchCB);



    // var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	// 	    mapOption = {
	// 	        center: new kakao.maps.LatLng(37.56843, 126.97472), // 지도의 중심좌표
	// 	        level: 6, // 지도의 확대 레벨
	// 	        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
	// 	    }; 

	// 	// 지도를 생성한다 

	// 	var map=new kakao.maps.Map(mapContainer, mapOption); 
        
        for(var i=0;i<place.length;i++){
          
            if(place[i].day.filter(x=>currentday.includes(x)).length>0 && place[i].Bottle_kind.filter(x=>currentbottle.includes(x)).length>0){
            if(i%3==0){
            var markerImageUrl = '../img/Group 1182 (1).png', 
        // 'https://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png',
        // '../img/Group 1182 (1).png', 
		    markerImageSize = new kakao.maps.Size(36, 42), // 마커 이미지의 크기
		    markerImageOptions = { 
		        offset : new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
		    };

		// 마커 이미지를 생성한다
		var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);
    }
    else if(i%3==1){
        var markerImageUrl = '../img/Group 1170 (1).png', 
        // 'https://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png',
        // '../img/Group 1182 (1).png', 
		    markerImageSize = new kakao.maps.Size(30, 42), // 마커 이미지의 크기
		    markerImageOptions = { 
		        offset : new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
		    };

		// 마커 이미지를 생성한다
		var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);
    }
    
    else{
        var markerImageUrl = '../img/Group 1183 (1).png', 
        // 'https://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png',
        // '../img/Group 1182 (1).png', 
		    markerImageSize = new kakao.maps.Size(36, 42), // 마커 이미지의 크기
		    markerImageOptions = { 
		        offset : new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
		    };

		// 마커 이미지를 생성한다
		var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);
    }
    
    
    var positionA=new kakao.maps.LatLng(place[i].x, place[i].y)
		// 지도에 마커를 생성하고 표시한다
		var marker = new kakao.maps.Marker({
		    position: positionA, // 마커의 좌표
		    image : markerImage, // 마커의 이미지
		    map: map // 마커를 표시할 지도 객체
		});
    
		
        
        var overlay = new kakao.maps.CustomOverlay(
            {
            
                // content: content,
            // map: map,
            position: positionA,    
        });


        var content = document.createElement('div');
        content.className='Map_wrap'
        var info=document.createElement('div')
        info.className='info'
        content.appendChild(info)
        var title=document.createElement('div')
        title.className='title'
        title.innerHTML=('📌   '+place[i].place_name)
        info.appendChild(title)
        var close=document.createElement('div')
        close.className='close'
        close.title='닫기'
        info.appendChild(close)
        var body=document.createElement('body')
        body.className='body'
        content.appendChild(body)
        var img=document.createElement('img')
        img.className='img'
        img.src=place[i].image
        body.appendChild(img)
        var desc=document.createElement('div')
        desc.className='desc'
        body.appendChild(desc)

        var day_zone=document.createElement('div')
        day_zone.className='day_zone'
        desc.appendChild(day_zone)

        for(var a=0;a<place[i].day.length;a++){
        var ellipsis=document.createElement('div')
        ellipsis.className='lay_day'
        ellipsis.innerHTML=place[i].day[a]
        day_zone.appendChild(ellipsis)

        
    }


        
        var jibun=document.createElement('div')
        jibun.className='jibun'
        
        desc.appendChild(jibun)

        var jubun_image=document.createElement('img')
        jubun_image.className='jibun_image'
        jubun_image.src='../img/현위치.png'
        jibun.appendChild(jubun_image)

       var jibun_text=document.createElement('span')
       jibun_text.className='jubun_text'
       jibun.appendChild(jibun_text)
       jibun_text.innerHTML=place[i].address

        var linktext=document.createElement('div')
        linktext.className='linktext'
        desc.appendChild(linktext)

        var linkto=document.createElement('a')
        linkto.href="/main"
        linktext.append(linkto)

        var linkmessage=document.createElement('div')
        linkmessage.className=('linkmessage')
        linkmessage.innerHTML='자세히 보기'
        linkto.appendChild(linkmessage)
    
        overlay.setContent(content);
        
        


        (function(marker, overlay) {
        kakao.maps.event.addListener(marker, 'click', function() {
            overlay.setMap(map);
        });
        close.onclick = function () {
            overlay.setMap(null);
        };
        
       
        })(marker, overlay);}
        else{
            continue;
        }
    }

    // useEffect(()=>{
    localStorage.setItem('currentday',JSON.stringify(currentday))
    if(count>=20){
        window.location.reload();
    }
    else{
        setcount(count+1)
    }
    console.log("새로고침")
    
    
  }, [where,currentday,currentbottle,place]);
  

  useEffect(()=>{
   
// 지도 타입 변경 컨트롤을 생성한다
var mapTypeControl = new kakao.maps.MapTypeControl();

// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);	

// 지도에 확대 축소 컨트롤을 생성한다
var zoomControl = new kakao.maps.ZoomControl();



// 지도의 우측에 확대 축소 컨트롤을 추가한다
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

  },[where])

  
  const dayselect=(e)=>{
    if(e.target.className=='day_select_button'){
        e.target.className='day_select_unclicked'
        setcurrentday(currentday.filter(function(data){
            
            return data != e.target.innerHTML
        }))
    }
    else{
        e.target.className='day_select_button'
        setcurrentday(currentday.concat([e.target.innerHTML]))
    }
  }

  const bottleselect=(e)=>{
    if(e.target.className=='bottle_button'){
        e.target.className='bottle_button_unclicked'
        setcurrentbottle(currentbottle.filter(function(data){
            
            return data != e.target.innerText
        }))
    }
    else{
        e.target.className='bottle_button'
        setcurrentbottle(currentbottle.concat([e.target.innerText]))
    }
  }

  const [searchwhere,setsearchwhere]=useState(where)
  const onSubmitSearch = (e) => {
    if (e.key === "Enter") {
     setwhere(searchwhere)
    }
  };
  return (
    <div className="Map">
        <MapNav></MapNav>
        <div className="MapPage_search">
            <input placeholder="지역을 검색해주세요!" value={searchwhere} onKeyPress={(e)=>onSubmitSearch(e)} onChange={(e)=>setsearchwhere(e.target.value)}></input><img onClick={()=>setwhere(searchwhere) } src={process.env.PUBLIC_URL+`../img/Group 1140.png`}></img>
        </div>
        
      <div className="MapContainer" id="map">
      <div className="option_view">
            <div className="day_selectzone">
                <span>요일 선택</span>
                <div className="day_button">
                <div className="day_select_button" onClick={(e)=>dayselect(e)} name='월'>월</div>
                <div className="day_select_button" onClick={(e)=>dayselect(e)} value='화'>화</div>
                <div className="day_select_button" onClick={(e)=>dayselect(e)} value='수'>수</div>
                <div className="day_select_button" onClick={(e)=>dayselect(e)} value='목'>목</div>
                <div className="day_select_button" onClick={(e)=>dayselect(e)} value='금'>금</div>
                <div className="day_select_button" onClick={(e)=>dayselect(e)} value='토'>토</div>
                <div className="day_select_button" onClick={(e)=>dayselect(e)} value='일'>일</div>
                </div>

            </div>

            <div className="bottle_select">
                <span>공병 수거 종류</span>
                <div className="bottle_flex">
                <div className="bottle_button" onClick={(e)=>bottleselect(e)}>
                    <img src="../img/Group 1170 (1).png" onClick={1}></img>
                    소형 및 중형
                </div>
                <div className="bottle_button" onClick={(e)=>bottleselect(e)}>
                <img src="../img/Group 1183 (1).png" onClick={1}></img>
                    대형 및 유류 정종 
                </div>
                <div className="bottle_button" onClick={(e)=>bottleselect(e)}>
                <img src="../img/화장품병.png" onClick={1}></img>
                    화장품 및 기타 공병
                </div>
                </div>
            </div>
            
            </div>
      </div>
    </div>
  );
};

export default React.memo(MapPage);
