import * as React from "react";
import "../../assets/css/common.css";
import GuestOrderList from "./GuestOrderList";

export default function HostGusetParticipationItem({
  index,
  participationInfo,
  onClickRefuse,
  onClickAccept,
}) {
  return !(participationInfo.agreeByHostStatus === "REFUSED") ? (
    <div className="order-sheet">
      <GuestOrderList guest={participationInfo} />

      <div className="btn-group2">
        <button
          type="button"
          className="btn btn-custom btn-custom-v4 js-modal-open"
          onClick={() => onClickRefuse(participationInfo.memberIdx, index)}
        >
          거절
        </button>
        <button
          type="button"
          className={
            "btn btn-custom" +
            (participationInfo.agreeByHostStatus === "WAITING"
              ? " btn-custom-v3"
              : " btn-custom-v6")
          }
          onClick={() => onClickAccept(participationInfo.memberIdx, index)}
        >
          수락
        </button>
      </div>
    </div>
  ) : null;
}
