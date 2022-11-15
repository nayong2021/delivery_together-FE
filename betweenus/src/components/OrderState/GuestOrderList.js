import * as React from "react";
import { ReactComponent as User1 } from "../../assets/img_renewal/ico_noimage1.svg";
import OrderMenuItem from "./OrderMenuItem";

export default function GuestOrderList({ guest }) {
  return (
    <>
      <div className="orderer-info">
        <div className="user-profile">
          <div className="user-picture">
            <User1 />
          </div>
          <div className="user-nickname">{guest.nickName}</div>
        </div>

        <div className="price">
          <strong>{guest.memberTotalPrice.toLocaleString()}</strong>원
        </div>
      </div>

      <div className="menu-group">
        {guest.orderItems.map((menu, idx) => (
          <OrderMenuItem key={idx} menu={menu} />
        ))}
      </div>
    </>
  );
}
