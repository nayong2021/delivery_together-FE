import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as Img } from "../../assets/img/ico_graphic2.svg";

const JoinBefore = () => {
  return (
    <div className="no-data">
      <Img />
      <div className="txt">
        <br />
      </div>
      <div className="txt">현재 참여하고 있는 배달 공동구매 방이 없어요!</div>
    </div>
  );
};

export default JoinBefore;
