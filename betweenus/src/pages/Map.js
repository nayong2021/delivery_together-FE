import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";
import BottomNavigation from "../components/common/BottomNavigation";
import KakaoMap from "../components/map/KakaoMap";

const Map = () => {
  return (
    <div className="Map">
      <MetaTag />
      <section className="map" width="100%" height="100%">
        <KakaoMap />
        <a href="/search" className="btn-search">
          <button type="button" className="btn-location"></button>
        </a>
        <BottomNavigation />
      </section>
    </div>
  );
};

export default Map;
