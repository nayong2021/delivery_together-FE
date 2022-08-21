import * as React from "react";

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
