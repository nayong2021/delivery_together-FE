import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";
import BottomNavigation from "../components/common/BottomNavigation";
import KakaoMap from "../components/map/KakaoMap";
import MapItemDetail from "../components/map/MapItemDetail";

const Map = () => {
  const searchButton = () => {
    console.log("search!");
  };
  const currentLocation = () => {
    console.log("current!");
  };

  return (
    <div className="Map">
      <MetaTag />
      <section className="map" width="100%" height="100%">
        <MapItemDetail />
        <KakaoMap style={{ position: "relative", zIndex: "1" }} />
        <BottomNavigation />
      </section>
    </div>
  );
};

export default Map;
