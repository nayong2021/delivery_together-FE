import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";
import BottomNavigation from "../components/common/BottomNavigation";

const Map = () => {
  return (
    <div className="Map">
      <MetaTag />
      <section className="map">
        <a href="/search" className="btn-search">
          <button type="button" className="btn-location"></button>
        </a>
      </section>
      <BottomNavigation />
    </div>
  );
};

export default Map;
