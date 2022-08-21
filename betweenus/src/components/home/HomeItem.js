import * as React from "react";
import { Link } from "react-router-dom";
import OrderTimeClock from "../common/OrderTimeClock";

export default function HomeItem({
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
            <OrderTimeClock timeToOrder={time} />
          </div>
          <div className="info">
            <span className="price">
              예상배달비: {price}원 / {participant}명
            </span>
            {/* <span className="distance">{distance}</span> */}
          </div>
        </div>
      </Link>
    </li>
  );
}
