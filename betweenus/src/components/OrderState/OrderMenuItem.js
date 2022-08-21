import * as React from "react";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";

export default function OrderMenuItem({
    menu
}) {
  return (
    <div className="menu">
        <div className="tit">{menu.menuName}</div>
        <div className="num">x {menu.quantity}개</div>
        <div className="price">{menu.price}원</div>
    </div>
  );
}
