import * as React from "react";
import "../../assets/css/common.css";
import GuestOrderList from "./GuestOrderList";

export default function HostGusetParticipationItem({
    index,
    participationInfo,
    onClickRefuse,
    onClickAccept
}) {
    return (
        
        !(participationInfo.agreeByHostStatus === "REFUSED") ? (
            <li>
                <GuestOrderList
                guest={participationInfo}/>

                <div className="btn-group-order">
                    <button type="button" 
                    className={"btn btn-custom" + (participationInfo.agreeByHostStatus === "WAITING" ? " btn-custom-v1" : "")}
                    onClick={() => onClickAccept(participationInfo.memberIdx, index)}>
                        수락
                    </button>
                    <button type="button" 
                    className="btn btn-custom btn-custom-v2"
                    onClick={() => onClickRefuse(participationInfo.memberIdx, index)}>
                        거절
                    </button>
                </div>
            </li>
        ) : null
    );
}
