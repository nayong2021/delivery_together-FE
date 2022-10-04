import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";
import BottomNavigation from "../components/common/BottomNavigation";
import KakaoMap from "../components/map/KakaoMap";

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
        <a href="#" className="btn-search" onClick={searchButton}></a>
        <button
          type="button"
          className="btn-location"
          onClick={currentLocation}
        ></button>
        <KakaoMap />
        <BottomNavigation />
      </section>
    </div>
  );
};

export default Map;
