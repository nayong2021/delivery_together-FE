import * as React from "react";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import OrderTimeClock from "../common/OrderTimeClock";

export default function OrderStateItemInfo({orderInfo}) {
  return (
    <div className="item-info">
      <div className="tit">{orderInfo.title}</div>
      <div className="group">
        <div className="place">{orderInfo.storeName}</div>
        <OrderTimeClock 
        timeToOrder={orderInfo.timeToOrder}/>
        {/* <div className="time">
          <Clock />
          &nbsp;마감 {orderInfo.timeToOrder? orderInfo.timeToOrder[0]: null}:{orderInfo.timeToOrder? orderInfo.timeToOrder[1]: null}pm */}
        {/* </div> */}
      </div>
    </div>
  );
}
