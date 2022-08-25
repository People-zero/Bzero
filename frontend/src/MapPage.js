import React, { useEffect, useState } from "react";

import "./css/MapPage.css";

import "./css/Mapnav.css";
import MapNav from "./components/MapNav";


const { kakao } = window;

const MapPage = () => {
    
    const [where,setwhere]=useState("정릉시장")
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		    mapOption = {
		        center: new kakao.maps.LatLng(37.56843, 126.97472), // 지도의 중심좌표
		        level: 5, // 지도의 확대 레벨
		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		    }; 
var infowindow = new kakao.maps.InfoWindow({zIndex:1});
		// 지도를 생성한다 
		var map = new kakao.maps.Map(mapContainer, mapOption); 

		// 지도 타입 변경 컨트롤을 생성한다
		var mapTypeControl = new kakao.maps.MapTypeControl();

		// 지도의 상단 우측에 지도 타입 변경 컨트롤을 추가한다
		map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);	

		// 지도에 확대 축소 컨트롤을 생성한다
		var zoomControl = new kakao.maps.ZoomControl();

    

		// 지도의 우측에 확대 축소 컨트롤을 추가한다
		map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
		// 마커 이미지의 주소
        
		
        const place=[{
            place_name:"하윤집",
            x:37.6084606,
            y:127.0094845,
        },
    {
        place_name:"축산",
            x:37.6055906,
            y:127.0099845,
    },{place_name:"test",
            x:37.6064606,
            y:127.0096845,
    },{
        place_name:"하윤집s",
        x:37.6084606,
        y:127.0073845,
    },
]

        for(var i=0;i<place.length;i++){
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
    
		// // 마커 위에 표시할 인포윈도우를 생성한다
		// var infowindow = new kakao.maps.InfoWindow({
		//     content : '<div class="infovar">공병 수거가 가능합니다!</div>' // 인포윈도우에 표시할 내용
		// });

		// // 인포윈도우를 지도에 표시한다
		// infowindow.open(map, marker);

		// 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
		// kakao.maps.event.addListener(marker, 'click', function() {
		//     alert('마커를 클릭했습니다!');
		// });
        // kakao.maps.event.addListener(marker, 'click', function() {
        //             // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        //             infowindow.setContent('<div>' + place[i].place_name + '</div>');
        //             infowindow.open(map, marker);
        //         });
        
        
        // 커스텀 오버레이를 닫기 위해 호출되는 함수입니다 
    

        
        // const content=('<div class="Map_wrap">' + 

        // '    <div class="info">' + 
        // '        <div class="title">' + 
        // '            카카오 스페이스닷원' + 
        // '            <div class="close" onclick="overlay.setup(null)" title="닫기"></div>' + 
        // '        </div>' + 
        // '        <div class="body">' + 
        // '            <div class="img">' +
        // '                <img src="https://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
        // '           </div>' + 
        // '            <div class="desc">' + 
        // '                <div class="ellipsis">'+place[i].place_name+'</div>' + 
        // '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' + 
        // '                <div><a href="https://www.kakaocorp.com/main" target="_blank" class="link">자세히보기</a></div>' + 
        // '            </div>' + 
        // '        </div>' + 
        // '    </div>' + 

        // '</div>');
        function closeOverlay() {
            overlay.setMap(null);     
        }
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
        title.innerHTML=place[i].place_name
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
        img.src="https://mblogthumb-phinf.pstatic.net/20160517_261/kljg28_1463472546517lMIjU_JPEG/20160517_152400.jpg?type=w800"
        body.appendChild(img)
        var desc=document.createElement('div')
        desc.className='desc'
        body.appendChild(desc)
        var ellipsis=document.createElement('div')
        ellipsis.className='ellipsis'
        ellipsis.innerHTML='임시용임시용'
        desc.appendChild(ellipsis)
        var jibun=document.createElement('div')
        jibun.className='jibun'
        jibun.innerHTML='임시용임시용2'
        desc.appendChild(jibun)


    
    
    overlay.setContent(content);
        
        


        (function(marker, overlay) {
        kakao.maps.event.addListener(marker, 'click', function() {
            overlay.setMap(map);
        });
        close.onclick = function () {
            overlay.setMap(null);
        };
        
        // kakao.maps.event.addListener(marker, 'click', function() {
        //     overlay.setMap(null);
        // });
        
        
        // kakao.maps.event.addListener(marker, 'mouseout', function() {
        //     overlay.setMap(null);
        // });
        })(marker, overlay);
    }

  
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




// 지도에 마커를 표시하는 함수입니다
// function displayMarker(place) {
    
//     // 마커를 생성하고 지도에 표시합니다
//     var marker = new kakao.maps.Marker({
//         map: map,
//         position: new kakao.maps.LatLng(place.y, place.x) 
//     });

//     // 마커에 클릭이벤트를 등록합니다
//     kakao.maps.event.addListener(marker, 'click', function() {
//         // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
//         infowindow.setContent('<div>' + place.place_name + '</div>');
//         infowindow.open(map, marker);
//     });
// }

// var Marker=displayMarker(place)


  }, [where]);
  
  const [searchwhere,setsearchwhere]=useState(where)
  return (
    <div className="Map">
        <MapNav></MapNav>
        <div className="MapPage_search">
            <input placeholder="지역을 검색해주세요!" value={searchwhere} onChange={(e)=>setsearchwhere(e.target.value)}></input><img onClick={()=>setwhere(searchwhere) } src={process.env.PUBLIC_URL+`../img/Group 1140.png`}></img>
        </div>
      <div className="MapContainer" id="map">
      </div>
    </div>
  );
};

export default MapPage;