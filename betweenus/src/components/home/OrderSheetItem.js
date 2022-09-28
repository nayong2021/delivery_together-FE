import * as React from "react";

export default function OrderSheetItem({
  orderInfo,
  index,
  setOrderList,
  deleteOrder,
}) {
  const concatOptions = () => {
    let optionString = "";
    orderInfo.options.forEach((item) => {
      optionString = optionString.concat(item.name, ", ");
    });
    optionString = optionString.replace(/,\s*$/, "");

    return optionString;
  };

  const calculateTotalPrice = () => {
    let totalPrice = Number(orderInfo.menuData.price);
    orderInfo.options.forEach((item) => {
      totalPrice += Number(item.price);
    });
    totalPrice *= orderInfo.quantity;
    return totalPrice.toLocaleString();
  };

  const plusQuantity = () => {
    setOrderList((prevState) => {
      let newOrderList = [...prevState];
      newOrderList[index].quantity += 1;
      return newOrderList;
    });
  };

  const minusQuantity = () => {
    if (orderInfo.quantity > 1) {
      setOrderList((prevState) => {
        let newOrderList = [...prevState];
        newOrderList[index].quantity -= 1;
        return newOrderList;
      });
    }
  };

  return (
    <>
      {orderInfo ? (
        <li>
          <div className="img-group">
            <img
              src={orderInfo.menuData.image}
              alt="썸네일"
              className="thumb"
            />
          </div>
          <div className="menu-info">
            <div className="menu">{orderInfo.menuData.name}</div>
            {orderInfo.options.length > 0 ? (
              <div className="menu-option">{concatOptions()}</div>
            ) : null}
            <div className="price">{calculateTotalPrice()}원</div>
          </div>
          <div className="order-count">
            <button
              type="button"
              className="btn-minus"
              onClick={minusQuantity}
            ></button>
            <div className="num">{orderInfo.quantity}개</div>
            <button
              type="button"
              className="btn-plus"
              onClick={plusQuantity}
            ></button>
          </div>
          <div
            className="delete-order"
            onClick={() => deleteOrder(orderInfo)}
          ></div>
        </li>
      ) : null}
    </>
  );
}
