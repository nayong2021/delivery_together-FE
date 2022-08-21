import * as React from "react";
import OrderTimeClock from "../common/OrderTimeClock";

export default function OrderStateItemInfo({ orderInfo }) {
  return (
    <div className="item-info">
      <div className="tit">{orderInfo.title}</div>
      <div className="group">
        <div className="place">{orderInfo.storeName}</div>
        <OrderTimeClock timeToOrder={orderInfo.timeToOrder} />
      </div>
    </div>
  );
}
