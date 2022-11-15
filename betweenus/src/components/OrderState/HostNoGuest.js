import * as React from "react";
import "../../assets/css/common.css";
import Cart from "../../assets/img_renewal/img_cart1.png";

const HostNoGuest = () => {
  return (
    <div className="no-data">
      <img src={Cart} alt="" />
      <div className="txt">
        <br />
      </div>
      <div className="txt">
        아직 배달 공동구매 방에
        <br />
        참여한 게스트가 없어요!
      </div>
    </div>
  );
};

export default HostNoGuest;
