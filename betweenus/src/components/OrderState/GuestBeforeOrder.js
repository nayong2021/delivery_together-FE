import * as React from "react";
import "../../assets/css/common.css";

const GuestBeforeOrder = () => {
  return (
    <div className="delivery-state">
      <div className="message">주문 예정입니다</div>
      <div className="time">호스트가 곧 주문할 예정입니다.</div>
      <div className="timer">
        주문 <br />
        예정
      </div>
      <div className="progress-group">
        <div className="bg">
          <div className="current" style={{ width: "3%" }}>
            <span className="bubble bubble-v1">주문전</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestBeforeOrder;
