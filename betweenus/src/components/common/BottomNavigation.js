import * as React from "react";
import "../../assets/css/common.css";

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
          <a href="sub/item-write.html">
            <i className="ico" aria-hidden="true"></i>
          </a>
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
