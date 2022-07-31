import * as React from "react";
import "../../assets/css/common.css";
import { NavLink, Outlet } from "react-router-dom";

const TopOrderState = () => {
  return (
    <div>
      <header class="header">
        <div class="tab-menu">
          <NavLink
            to="order"
            class={({ isActive }) => (isActive ? "active" : "active")}
          >
            주문현황
          </NavLink>
          <NavLink
            to="chatting"
            class={({ isActive }) => (isActive ? "active" : "")}
          >
            채팅방
          </NavLink>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default TopOrderState;
