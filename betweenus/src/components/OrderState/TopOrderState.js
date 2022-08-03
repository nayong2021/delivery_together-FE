import * as React from "react";
import "../../assets/css/common.css";
import { NavLink, Outlet } from "react-router-dom";

const TopOrderState = () => {
  return (
    <div id="root">
      <header className="header">
        <div className="tab-menu">
          <NavLink
            end
            to="/state"
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
      </header>
      <Outlet />
    </div>
  );
};

export default TopOrderState;
