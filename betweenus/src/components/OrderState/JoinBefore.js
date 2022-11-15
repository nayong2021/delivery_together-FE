import * as React from "react";
import "../../assets/css/common.css";
import Cart from "../../assets/img_renewal/img_cart1.png";

const JoinBefore = () => {
  return (
    <div className="no-data">
      <img src={Cart} alt="" />
      <div className="txt">
        <br />
      </div>
      <div className="txt">
        현재 참여하고 있는 <br />
        배달 공동구매 방이 없어요!
      </div>
    </div>
  );
};

export default JoinBefore;
