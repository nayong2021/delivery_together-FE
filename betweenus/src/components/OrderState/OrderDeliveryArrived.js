import * as React from "react";
import "../../assets/css/common.css";
import useStoreOrderInfo from "../../store/storeOrderInfo";

const OrderDeliveryArrived = () => {
  const { orderInfo } = useStoreOrderInfo();

  const deliveryTime = new Date(orderInfo.deliveryTimeInputTime);

  return (
    <div className="delivery-state">
      <div className="message">도착 완료!</div>
      <div className="time">
        오후 {deliveryTime.getHours()}시
        {deliveryTime.getMinutes() + orderInfo.deliveryLeadTime}분 도착 완료
      </div>
      <div className="timer">
        도착 <br />
        완료
      </div>
      <div className="progress-group">
        <div className="bg">
          <div className="current" style={{ width: "100%" }}></div>
        </div>
      </div>
    </div>
  );
};

export default OrderDeliveryArrived;
