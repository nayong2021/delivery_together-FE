import * as React from "react";
import "../../assets/css/common.css";

const HostBeforeOrder = () => {
  return (
    <div class="delivery-state">
      <div class="message">
        <img src={require("../../assets/img/ico_mark1.svg").default} alt=" " />
        &nbsp;배달 주문을 완료해주세요!
      </div>
      <div class="time">배달 주문 후 도착 예정시간을 입력해주세요.</div>
      <div class="inp-group-timer">
        <input type="text" placeholder="남은 시간" class="inp-timer" />
        <button type="button" class="btn-timer">
          시간 등록
        </button>
      </div>
    </div>
  );
};

export default HostBeforeOrder;
