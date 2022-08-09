import * as React from "react";
import foodpic from "../../assets/img/img_picture1.jpg";
import useStoreMenu from "../../store/storeMenu";

export default function MenuItem({ title, price, quantity, onMinus, onPlus }) {
  const { smenudata, setMenudata, fixMenudata } = useStoreMenu(
    (state) => state
  );
  return (
    <li>
      <div className="img-group">
        <img src={foodpic} alt="썸네일" className="thumb" />
      </div>

      <div className="menu-info">
        <div className="tit">{title}</div>
        <div className="price">{price}원</div>
        <div className="order-count">
          <button
            type="button"
            className="btn-minus"
            onClick={() => {
              onMinus(title, quantity);
            }}
          ></button>
          <div className="num">{quantity}개</div>
          <button
            type="button"
            className="btn-plus"
            onClick={() => {
              fixMenudata(title, quantity);
            }}
          ></button>
        </div>
      </div>
    </li>
  );
}
