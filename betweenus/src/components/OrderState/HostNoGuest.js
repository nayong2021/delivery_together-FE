import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as Img } from "../../assets/img/ico_graphic2.svg";

const HostNoGuest = () => {
  return (
    <div className="no-data">
      <Img />
      <div className="txt">
        <br />
      </div>
      <div className="txt">아직 배달 공동구매 방에 참여한 게스트가 없어요!</div>
    </div>
  );
};

export default HostNoGuest;
