import * as React from "react";

export default function OrderSheetItem({
  menuName,
  price,
  quantity,
  minusMenudata,
  plusMenudata,
}) {
  return (
    <li>
      <div className="menu">{menuName}</div>
      <div className="price">{price}</div>
      <div className="order-count">
        <button
          type="button"
          className="btn-minus"
          onClick={() => {
            minusMenudata(menuName, quantity);
          }}
        ></button>
        <div className="num">{quantity}</div>
        <button
          type="button"
          className="btn-plus"
          onClick={() => {
            plusMenudata(menuName);
          }}
        ></button>
      </div>
    </li>
  );
}
