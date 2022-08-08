import * as React from "react";
import foodpic from "../../assets/img/img_picture1.jpg";

export default function MenuItem({ title, price }) {
  return (
    <li>
      <div className="img-group">
        <img src={foodpic} alt="썸네일" className="thumb" />
      </div>

      <div className="menu-info">
        <div className="tit">{title}</div>
        <div className="price">{price}원</div>
        <div className="order-count">
          <button type="button" className="btn-minus"></button>
          <div className="num">1개</div>
          <button type="button" className="btn-plus"></button>
        </div>
      </div>
    </li>
  );
}
