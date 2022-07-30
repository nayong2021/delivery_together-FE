import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";

const OrderComplete = () => {
  return (
    <div class="delivery-state">
      <div class="message">주문 완료! 😀</div>
      <div class="time">오후 7시 15분 도착 예정</div>
      <div class="timer">
        남은시간 <br />
        7분
      </div>
      <div class="progress-group">
        <div class="bg">
          <div class="current" style={{ width: "65%" }}>
            <span class="bubble">진행중</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
