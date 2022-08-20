import * as React from "react";
import { ReactComponent as NoRoomIcon } from "../../assets/img/ico_graphic1.svg";

export default function NoRoomNotice() {
  return (
    <div className="no-data">
      <NoRoomIcon />
      <div className="txt">
        아직 공동구매 모집방이 없어요. <br />
        호스트가 되어 배달 공동구매방을 만들어주세요 :)
      </div>
    </div>
  );
}
