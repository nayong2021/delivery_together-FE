import * as React from "react";
import "../../assets/css/common.css";
import HostBeforeOrder from "./HostBeforeOrder";
import GuestBeforeOrder from "./GuestBeforeOrder";
import OrderComplete from "./OrderComplete";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import OrderResult from "./OrderResult"
import GuestOrderList from "./GuestOrderList"
import OrderStateItemInfo from "./OrderStateItemInfo";
import DeliveryArrivedBtn from "./DeliveryArrivedBtn";
import OrderDeliveryArrived from "./OrderDeliveryArrived";

const OrderState = () => {
  const { orderInfo } = useStoreOrderInfo();
  let component;

  if (orderInfo.postStatus === "ORDERED") {
    component = <OrderComplete />;
  } 
  if (orderInfo.currentUserIsHost && orderInfo.postStatus === "RECRUITMENT_CLOSED") {
    component = <HostBeforeOrder />;
  } 
  if (!orderInfo.currentUserIsHost && orderInfo.postStatus === "RECRUITMENT_CLOSED") {
    component = <GuestBeforeOrder />;
  }
  if (orderInfo.postStatus === "DELIVERY_ARRIVED"){
    component = <OrderDeliveryArrived />
  }

  return (
    <section className="state">
      <div className="wrap">
        <OrderStateItemInfo
        orderInfo={orderInfo}/>
        {component}
        <DeliveryArrivedBtn/>

        <ol className="list-cart">
          {
            orderInfo.orderLists && 
            orderInfo.orderLists.map((item, idx) => (
              <li
              key={idx}>
                <GuestOrderList 
                guest={item} />
              </li>              
            ))
          }
        </ol>

        <OrderResult />
      </div>
    </section>
  );
};

export default OrderState;
