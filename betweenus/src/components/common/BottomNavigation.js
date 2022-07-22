import * as React from "react";
import "../../assets/css/common.css";
import { Link } from "react-router-dom";

export default function BottomNavigation() {
  return (
    <footer className="footer">
      <div className="ft">
        <div className="ft-menu">
          <a href="/home" className="active">
            <div className="ico"></div>
            <div className="tit">홈</div>
          </a>
          <Link to="/map">
            <div className="ico"></div>
            <div className="tit">지도</div>
          </Link>
          <Link to="/add">
            <i className="ico" aria-hidden="true"></i>
          </Link>
          <a href="/state">
            <div className="ico"></div>
            <div className="tit">주문</div>
          </a>
          <a href="/setting">
            <div className="ico"></div>
            <div className="tit">설정</div>
          </a>
        </div>
      </div>
    </footer>
  );
}
