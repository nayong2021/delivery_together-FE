import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import BottomNavigation from "../../components/common/BottomNavigation";
import JoinBefore from "../../components/OrderState/JoinBefore";
import HostNoGuest from "../../components/OrderState/HostNoGuest";
import HostYesGuest from "../../components/OrderState/HostYesGuest";
import GuestWaitRecruit from "../../components/OrderState/GuestWaitRecruit";
import OrderState from "../../components/OrderState/OrderState";

const State = () => {
  return (
    <div className="State">
      <MetaTag />
      {/* <JoinBefore /> */}
      {/* <HostYesGuest /> */}
      {/* <HostNoGuest /> */}
      {/* <GuestWaitRecruit /> */}
      <OrderState />
      <BottomNavigation order={"active"} />
    </div>
  );
};

export default State;
