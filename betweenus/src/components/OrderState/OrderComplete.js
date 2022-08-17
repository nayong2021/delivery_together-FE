import * as React from "react";
import "../../assets/css/common.css";

const OrderComplete = () => {
  return (
    <div className="delivery-state">
      <div className="message">주문 완료! :)</div>
      <div className="time">오후 7시 15분 도착 예정</div>
      <div className="timer">
        남은시간 <br />
        7분
      </div>
      <div className="progress-group">
        <div className="bg">
          <div className="current" style={{ width: "65%" }}>
            <span className="bubble">진행중</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
