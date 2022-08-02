import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";

export default function RoomItem({
  index,
  title,
  place,
  time,
  price,
  participant,
  distance,
}) {
  return (
    <li className="list-item">
      <Link to={`/itemview/${index}`}>
        <div className="tit">{title}</div>
        <div className="place">{place}</div>
        <div className="info-group">
          <div className="time">
            <Clock />
            &nbsp;마감 {time}
          </div>
          <div className="info">
            <span className="price">
              예상배달비: {price}원 / {participant}
            </span>
            <span className="distance">{distance}</span>
          </div>
        </div>
      </Link>
    </li>
  );
}
