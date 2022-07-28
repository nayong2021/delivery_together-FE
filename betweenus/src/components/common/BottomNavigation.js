import * as React from "react";
import "../../assets/css/common.css";
import { Link } from "react-router-dom";

export default function BottomNavigation({ home, map, order, setting }) {
  return (
    <footer className="footer">
      <div className="ft">
        <div className="ft-menu">
          <a href="/home" className={home}>
            <div className="ico"></div>
            <div className="tit">홈</div>
          </a>
          <Link to="/map" className={map}>
            <div className="ico"></div>
            <div className="tit">지도</div>
          </Link>
          <Link to="/add">
            <i className="ico" aria-hidden="true"></i>
          </Link>
          <a href="/state" className={order}>
            <div className="ico"></div>
            <div className="tit">주문</div>
          </a>
          <a href="/setting" className={setting}>
            <div className="ico"></div>
            <div className="tit">설정</div>
          </a>
        </div>
      </div>
    </footer>
  );
}
