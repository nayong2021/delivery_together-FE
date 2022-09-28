import * as React from "react";

export default function OrderMenuItem({ menu }) {
  const concatOptions = () => {
    let optionString = "";
    menu.options.forEach((item) => {
      optionString = optionString.concat(item.optionName, ", ");
    });
    optionString = optionString.replace(/,\s*$/, "");

    return optionString;
  };
  return (
    <div className="order">
      <div className="menu">
        <div className="tit">{menu.menuName}</div>
        <div className="num">x {menu.quantity}개</div>
        <div className="price">{menu.itemTotalPrice.toLocaleString()}원</div>
      </div>
      {menu.options.length > 0 ? (
        <div className="menu-options">{concatOptions()}</div>
      ) : null}
      {/* {menu.options.map((item, idx) => {
        return <div key={idx}>{item.optionName}</div>;
      })} */}
    </div>
  );
}
