import * as React from "react";
import "../../assets/css/common.css";
import HostBeforeOrder from "./HostBeforeOrder";
import GuestBeforeOrder from "./GuestBeforeOrder";
import OrderComplete from "./OrderComplete";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import OrderResult from "./OrderResult";
import GuestOrderList from "./GuestOrderList";
import DeliveryArrivedBtn from "./DeliveryArrivedBtn";
import OrderDeliveryArrived from "./OrderDeliveryArrived";
import { Link } from "react-router-dom";
import OrderTimeClock from "../common/OrderTimeClock";

const OrderState = () => {
  const { orderInfo } = useStoreOrderInfo();
  let component;

  if (orderInfo.postStatus === "ORDERED") {
    component = <OrderComplete />;
  }
  if (
    orderInfo.currentUserIsHost &&
    orderInfo.postStatus === "RECRUITMENT_CLOSED"
  ) {
    component = <HostBeforeOrder />;
  }
  if (
    !orderInfo.currentUserIsHost &&
    orderInfo.postStatus === "RECRUITMENT_CLOSED"
  ) {
    component = <GuestBeforeOrder />;
  }
  if (orderInfo.postStatus === "DELIVERY_ARRIVED") {
    component = <OrderDeliveryArrived />;
  }

  return (
    <section className="state">
      <div className="wrap">
        <div className="order-group2" style={{ paddingTop: "20px" }}>
          <Link to={`/itemview/${orderInfo.postIdx}`} className="item-info">
            <div className="time">
              <OrderTimeClock timeToOrder={orderInfo.timeToOrder} />
            </div>
            <div className="tit">{orderInfo.title}</div>
            <div className="place">{orderInfo.storeName}</div>
          </Link>
          {component}
          <DeliveryArrivedBtn />
          {orderInfo.orderLists &&
            orderInfo.orderLists.map((item, idx) => (
              <li key={idx}>
                <GuestOrderList guest={item} />
              </li>
            ))}
          <OrderResult />
        </div>
      </div>
    </section>
  );
};

export default OrderState;
