import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import BottomNavigation from "../../components/common/BottomNavigation";
import { Outlet } from "react-router-dom";
import JoinBefore from "../../components/OrderState/JoinBefore";
import HostNoGuest from "../../components/OrderState/HostNoGuest";
import HostYesGuest from "../../components/OrderState/HostYesGuest";
import GuestWaitRecruit from "../../components/OrderState/GuestWaitRecruit";
import TopOrderState from "../../components/OrderState/TopOrderState";

const State = () => {
  return (
    <div className="State">
      <MetaTag />
      {/* <JoinBefore /> */}
      {/* <HostYesGuest /> */}
      {/* <HostNoGuest /> */}
      {/* <GuestWaitRecruit /> */}
      <TopOrderState />
      <BottomNavigation order={"active"} />
    </div>
  );
};

export default State;
