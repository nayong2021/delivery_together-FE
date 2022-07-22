import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";

export default function RoomItem({ title, place, time, price, distance }) {
  return (
    <li className="list-item">
      <Link to="/itemview">
        <div className="tit">{title}</div>
        <div className="place">{place}</div>
        <div className="info-group">
          <div className="time">
            <Clock />
            &nbsp;{time}
          </div>
          <div className="info">
            <span className="price">{price}</span>
            <span className="distance">{distance}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
