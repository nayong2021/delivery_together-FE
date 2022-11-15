import * as React from "react";
import "../../assets/css/common.css";
import Cart from "../../assets/img_renewal/img_cart1.png";

const GuestWaitRecruit = () => {
  return (
    <div className="no-data">
      <img src={Cart} alt="" />
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
