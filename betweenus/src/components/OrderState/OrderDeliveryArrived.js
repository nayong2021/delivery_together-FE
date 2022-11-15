import * as React from "react";
import "../../assets/css/common.css";

const OrderDeliveryArrived = () => {
  return (
    <div className="delivery-state">
      <div className="message">도착 완료!</div>
      <div className="time">오후 7시 15분 도착 완료</div>
      <div className="timer">
        도착 <br />
        완료
      </div>
      <div className="progress-group">
        <div className="bg">
          <div className="current" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeliveryArrived;
