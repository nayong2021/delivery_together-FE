import * as React from "react";
import { useState } from "react";
import "../../assets/css/common.css";
import { ReactComponent as User1 } from "../../assets/img/ico_user1.svg";
import { PostParticipateAcceptApi } from "../../modules/api/orderstate/PostParticipateAcceptApi";
import { PostParticipateRefuseApi } from "../../modules/api/orderstate/PostParticipateRefuseApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";

export default function ChatItem({
    participationInfo
}) {
    const { orderInfo, setOrderInfo } = useStoreOrderInfo();
    const [ agreeStatus, setAgreeStatus] = useState(participationInfo.agreeByHostStatus)
    const onClickAccept = async () => {
        const result = await PostParticipateAcceptApi(participationInfo.memberIdx, orderInfo.postIdx);
        if (result) {
            setAgreeStatus("ACCEPTED");
        }
    }
    const onClickRefuse = async () => {
        const result = await PostParticipateRefuseApi(participationInfo.memberIdx, orderInfo.postIdx);
        if (result) {
            setAgreeStatus("REFUSED");
            setOrderInfo({
                ...orderInfo,
                totalPrice: orderInfo.totalPrice - participationInfo.memberTotalPrice
            })
        }
    }
    return (
        !(agreeStatus === "REFUSED") ? (
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
                <div className="menu">
                <div className="tit">{menu.menuName}</div>
                <div className="num">x {menu.quantity}개</div>
                <div className="price">{menu.price}원</div>
                </div>
                ))}
            </div>

            <div className="btn-group-order">
            <button type="button" 
            className={"btn btn-custom" + (agreeStatus === "WAITING" ? " btn-custom-v1" : "")}
            onClick={onClickAccept}>
                수락
            </button>
            <button type="button" 
            className="btn btn-custom btn-custom-v2"
            onClick={onClickRefuse}>
                거절
            </button>
            </div>
        </li>
        ) : null
    );
}
