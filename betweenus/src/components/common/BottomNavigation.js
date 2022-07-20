import * as React from "react";
import "../../assets/css/common.css";
import { Link } from "react-router-dom";

export default function BottomNavigation() {
  return (
    <footer className="footer">
      <div className="ft">
        <div className="ft-menu">
          <a href="index.html" className="active">
            <div className="ico"></div>
            <div className="tit">홈</div>
          </a>
          <a href="sub/map.html">
            <div className="ico"></div>
            <div className="tit">지도</div>
          </a>
          <Link to="/add">
            <i className="ico" aria-hidden="true"></i>
          </Link>
          <a href="sub/cart.html">
            <div className="ico"></div>
            <div className="tit">주문</div>
          </a>
          <a href="sub/setting.html">
            <div className="ico"></div>
            <div className="tit">설정</div>
          </a>
        </div>
      </div>
    </footer>
  );
}
