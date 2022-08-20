/* global kakao */
import React, { useEffect } from "react";
import "./css/MapPage.css"
const { kakao } = window;

const MapPage = () => {
  useEffect(() => {
    let container = document.getElementById("map");

    let options = {
      center: new window.kakao.maps.LatLng(	37.609419394035, 127.00908068365),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    console.log("loading kakaomap");
  }, []);

  return (
    <div className="Map">
      <div className="MapContainer" id="map">
      </div>
    </div>
  );
};

export default MapPage;