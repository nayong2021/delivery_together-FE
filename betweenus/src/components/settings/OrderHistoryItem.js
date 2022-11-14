import * as React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Clock } from "../../assets/img_renewal/ico_clock1.svg";

const days = ["일", "월", "화", "수", "목", "금", "토"];

export default function OrderHistoryItem({
  index,
  title,
  place,
  time,
  price,
  host,
  logo,
}) {
  const orderDate = new Date(time[0], time[1] - 1, time[2]);
  console.log(orderDate);
  return (
    <li>
      <Link to={`/setting/orderhistory/${index}`}>
        <div className="img-group">
          <img src={logo} alt="썸네일" className="thumb" />
        </div>
        <div className="item-info">
          <div className="time">
            {/* <OrderTimeClock timeToOrder={time} /> */}
            <Clock />
            &nbsp;
            {`${time[0]}/${time[1]}/${time[2]} (${days[orderDate.getDay()]})`}
          </div>
          <div className="tit">{title}</div>
          <div className="place">{place}</div>
          <div className="etc-info">
            {/* <div className="distance">{printDistance(distance)}</div> */}
            {host ? null : (
              <div className="price">
                <span className="price">주문금액: {price}원</span>{" "}
              </div>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
