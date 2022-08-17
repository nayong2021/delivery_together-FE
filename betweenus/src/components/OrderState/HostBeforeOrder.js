import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as Warning } from "../../assets/img/ico_mark1.svg";

const HostBeforeOrder = () => {
  return (
    <div className="delivery-state">
      <div className="message">
        <Warning />
        &nbsp;배달 주문을 완료해주세요!
      </div>
      <div className="time">배달 주문 후 도착 예정시간을 입력해주세요.</div>
      <div className="inp-group-timer">
        <input type="text" placeholder="남은 시간" className="inp-timer" />
        <button type="button" className="btn-timer">
          시간 등록
        </button>
      </div>
    </div>
  );
};

export default HostBeforeOrder;
