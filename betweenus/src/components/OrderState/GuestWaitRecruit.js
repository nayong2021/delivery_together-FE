import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as Img } from "../../assets/img/ico_graphic2.svg";

const GuestWaitRecruit = () => {
  return (
    <div className="no-data">
      <Img />
      <div className="txt">
        <br />
      </div>
      <div className="txt">
        아직 호스트가 모집 중이에요. 호스트가 주문 수락 <br />
        또는 거절 시 푸시 알림으로 알려드릴게요! :)
      </div>
    </div>
  );
};

export default GuestWaitRecruit;
