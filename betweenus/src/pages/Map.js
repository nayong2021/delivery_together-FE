import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";
import BottomNavigation from "../components/common/BottomNavigation";
import KakaoMap from "../components/map/KakaoMap";
import MapItemDetail from "../components/map/MapItemDetail";
import styled from "styled-components";
import KakaoMapEx from "../components/map/KakaoMapEx";

const Map = () => {
  const MapContainer = styled.section`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  `;

  const searchButton = () => {
    console.log("search!");
  };
  const currentLocation = () => {
    console.log("current!");
  };

  return (
    <div className="Map">
      <MetaTag />
      <MapContainer className="map">
        {/* <KakaoMap style={{ position: "relative", zIndex: "1" }} /> */}
        <KakaoMapEx style={{ position: "relative", zIndex: "1" }} />
        <BottomNavigation />
      </MapContainer>
    </div>
  );
};

export default Map;
