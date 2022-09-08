import * as React from "react";
import "../../assets/css/common.css";
import { NavLink } from "react-router-dom";
import useStoreOrderInfo from "../../store/storeOrderInfo";

const OrderStateBar = ({path}) => {
  const { selectedIndex } = useStoreOrderInfo();
  return (
    <div className="tab-menu">
        <NavLink
        end
        to={`${path}/${selectedIndex}`}
        className={({ isActive }) => (isActive ? "active" : "")}
        >
        주문현황
        </NavLink>
        <NavLink
        to="chatting"
        className={({ isActive }) => (isActive ? "active" : "")}
        >
        채팅방
        </NavLink>
    </div>
  );
};

export default OrderStateBar;
