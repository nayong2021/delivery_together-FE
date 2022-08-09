import * as React from "react";

export default function OrderSheetItem({ menuName, price, quantity }) {
  return (
    <li>
      <div className="menu">순살 후라이드 양념 반반</div>
      <div className="price">15,000원</div>
      <div className="order-count">
        <button type="button" className="btn-minus"></button>
        <div className="num">1개</div>
        <button type="button" className="btn-plus"></button>
      </div>
    </li>
  );
}
