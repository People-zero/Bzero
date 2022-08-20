import React, { useEffect } from "react";

import "./css/MapPage.css";

import "./css/Mapnav.css";
const { kakao } = window;

const MapPage = () => {
  useEffect(() => {
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
		    mapOption = {
		        center: new kakao.maps.LatLng(37.56843, 126.97472), // 지도의 중심좌표
		        level: 5, // 지도의 확대 레벨
		        mapTypeId : kakao.maps.MapTypeId.ROADMAP // 지도종류
		    }; 

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
		var markerImageUrl = 'https://t1.daumcdn.net/localimg/localimages/07/2012/img/marker_p.png', 
		    markerImageSize = new kakao.maps.Size(40, 42), // 마커 이미지의 크기
		    markerImageOptions = { 
		        offset : new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
		    };

		// 마커 이미지를 생성한다
		var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

		// 지도에 마커를 생성하고 표시한다
		var marker = new kakao.maps.Marker({
		    position: new kakao.maps.LatLng(37.56670, 126.97522), // 마커의 좌표
		    image : markerImage, // 마커의 이미지
		    map: map // 마커를 표시할 지도 객체
		});

		// 마커 위에 표시할 인포윈도우를 생성한다
		var infowindow = new kakao.maps.InfoWindow({
		    content : '<div style="padding:5px;">인포윈도우 :D</div>' // 인포윈도우에 표시할 내용
		});

		// 인포윈도우를 지도에 표시한다
		infowindow.open(map, marker);

		// 마커에 클릭 이벤트를 등록한다 (우클릭 : rightclick)
		kakao.maps.event.addListener(marker, 'click', function() {
		    alert('마커를 클릭했습니다!');
		});
  }, []);

  return (
    <div className="Map">
    <div className="Map_nav">

    <div className="Map_nav_image"><img src={process.env.PUBLIC_URL+`../img/로고 파랑 2.png`}></img> BZero</div>
    
    <div className="Map_nav_sellect">
        <a href="/mypage"><div className="Map_nav_subtext">마이페이지</div></a>
        <div className="Map_nav_subtext" style={{color:'#0679FF'}}>가게 찾기</div>
        <div className="Map_nav_subsub">
            <div>클린스토어</div>
            <div style={{color:'#353535'}}>공병스토어</div>
        </div>
        <div className="Map_nav_subtext">커뮤니티</div>
        <div className="Map_nav_subtext">제로웨이스트 일기</div>
        
    </div>

    

    </div>
      <div className="MapContainer" id="map">
      </div>
    </div>
  );
};

export default MapPage;