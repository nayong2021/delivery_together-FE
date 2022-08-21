import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as User1 } from "../../assets/img/ico_user1.svg";
import OrderMenuItem from "./OrderMenuItem";

export default function HostGusetParticipationItem({
    index,
    participationInfo,
    onClickRefuse,
    onClickAccept
}) {
    return (
        !(participationInfo.agreeByHostStatus === "REFUSED") ? (
            <li>
                <div className="order-info">
                    <div className="user">
                        <User1 />
                        &nbsp;{participationInfo.nickName}
                    </div>
                <div className="total-price">총금액: {participationInfo.memberTotalPrice}원</div>
            </div>

            <div className="menu-group">
            {participationInfo.orderItems.map((menu, idx) => (
                <OrderMenuItem
                key={idx}
                menu={menu}/>
                ))}
            </div>

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
