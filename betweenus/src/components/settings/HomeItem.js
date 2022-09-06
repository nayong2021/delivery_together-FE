import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";

export default function HomeItem({ index, title, place, time, price, host }) {
  return (
    <li className="list-item">
      <Link to={`/setting/orderhistory/${index}`}>
        <div className="tit">{title}</div>
        <div className="place">{place}</div>
        <div className="info-group">
          <div className="time">
            <div className="time">
              <Clock />
              &nbsp;{time}
            </div>
          </div>
          <div className="info">
            {host ? null : <span className="price">주문금액: {price}원</span>}
          </div>
        </div>
      </Link>
    </li>
  );
}
