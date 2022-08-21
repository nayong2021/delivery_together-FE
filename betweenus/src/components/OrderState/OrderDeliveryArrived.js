import * as React from "react";
import "../../assets/css/common.css";

const OrderDeliveryArrived = () => {
  return (
    <div class="delivery-state">
        <div class="message">도착 완료!</div>
        <div class="time">오후 7시 15분 도착 완료</div>
        <div class="timer">도착 <br/>완료</div>
        <div class="progress-group">
            <div class="bg">
                <div class="current" style={{ width: "100%" }}>
                </div>
            </div>
        </div>
    </div>
  );
};

export default OrderDeliveryArrived;


