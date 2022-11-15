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
  logo,
}) {
  const printDistance = (distance) => {
    distance /= 1000;
    if (distance < 1) {
      return Math.round(distance * 1000) + "m";
    } else {
      return distance.toFixed(1) + "km";
    }
  };
  return (
    <li>
      <Link to={`/itemview/${index}`}>
        <div className="img-group">
          <img src={logo} alt="썸네일" className="thumb" />
        </div>
        <div className="item-info">
          <div className="time">
            <OrderTimeClock timeToOrder={time} />
          </div>
          <div className="tit">{title}</div>
          <div className="place">{place}</div>
          <div className="etc-info">
            <div className="distance">{printDistance(distance)}</div>
            <div className="price">
              예상배달비: {price}원 / {participant}명
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
