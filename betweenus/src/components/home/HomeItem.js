import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";

export default function RoomItem() {
  return (
    <li>
      <Link to="/itemview">
        <div className="tit">BBQ 치킨 같이 시켜먹어요</div>
        <div className="place">BBQ 치킨 아주대점</div>
        <div className="info-group">
          <div className="time">
            <Clock />
            마감 6:00pm
          </div>
          <div className="info">
            <span className="price">예상배달비: 4000원 / 3명</span>
            <span className="distance">0.1km</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
