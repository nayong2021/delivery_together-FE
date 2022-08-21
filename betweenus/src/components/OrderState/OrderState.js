import * as React from "react";
import "../../assets/css/common.css";
import HostBeforeOrder from "./HostBeforeOrder";
import GuestBeforeOrder from "./GuestBeforeOrder";
import OrderComplete from "./OrderComplete";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import OrderResult from "./OrderResult"
import GuestOrderList from "./GuestOrderList"
import OrderStateItemInfo from "./OrderStateItemInfo";

const OrderState = () => {
  const user = "guest";
  const order = true;
  const { orderInfo } = useStoreOrderInfo();
  let component;

  if (order) {
    component = <OrderComplete />;
  } else {
    if (user === "host") {
      component = <HostBeforeOrder />;
    } else if (user === "guest") {
      component = <GuestBeforeOrder />;
    }
  }

  return (
    <section className="state">
      <div className="wrap">
        <OrderStateItemInfo
        orderInfo={orderInfo}/>
        {component}

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
