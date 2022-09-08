import * as React from "react";
import "../../assets/css/common.css";
import { Outlet } from "react-router-dom";
import OrderStateBar from "./OrderStateBar";

const TopOrderState = () => {
  return (
    <div id="root">
      <header className="header">
        <OrderStateBar
        path={"/state"}/>
      </header>
      <Outlet />
    </div>
  );
};

export default TopOrderState;
