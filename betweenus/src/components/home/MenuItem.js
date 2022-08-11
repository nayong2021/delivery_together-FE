import * as React from "react";
import foodpic from "../../assets/img/img_picture1.jpg";

export default function MenuItem({
  menuName,
  price,
  quantity,
  minusMenudata,
  plusMenudata,
}) {
  return (
    <li>
      <div className="img-group">
        <img src={foodpic} alt="썸네일" className="thumb" />
      </div>

      <div className="menu-info">
        <div className="tit">{menuName}</div>
        <div className="price">{price}원</div>
        <div className="order-count">
          <button
            type="button"
            className="btn-minus"
            onClick={() => {
              minusMenudata(menuName, quantity);
            }}
          ></button>
          <div className="num">{quantity}개</div>
          <button
            type="button"
            className="btn-plus"
            onClick={() => {
              plusMenudata(menuName);
            }}
          ></button>
        </div>
      </div>
    </li>
  );
}
