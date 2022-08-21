import * as React from "react";
import { ReactComponent as User1 } from "../../assets/img/ico_user1.svg";
import OrderMenuItem from "./OrderMenuItem";

export default function GuestOrderList({
    guest
}) {
    return (
        <>
            <div className="order-info">
                <div className="user">
                    <User1 />
                    &nbsp;{guest.nickName}
                </div>
                <div className="total-price">총금액: {guest.memberTotalPrice}원</div>
            </div>
            <div className="menu-group">
            {guest.orderItems.map((menu, idx) => (
                <OrderMenuItem
                key={idx}
                menu={menu}/>
                ))}
            </div>
        </>
    );
}
