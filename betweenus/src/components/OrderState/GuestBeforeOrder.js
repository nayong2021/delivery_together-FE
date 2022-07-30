import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";

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
          <div className="current">
            <span className="bubble bubble-v1">주문전</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestBeforeOrder;
