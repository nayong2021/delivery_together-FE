import * as React from "react";
import "../../assets/css/common.css";
import OrderState from "./OrderState";
import Chatting from "./Chatting";

const TopOrderState = () => {
  return (
    <div>
      <header class="header">
        <div class="tab-menu">
          <a href="state.html" class="active">
            주문현황
          </a>
          <a href="chat.html">채팅방</a>
        </div>
      </header>
      <OrderState />
      {/* <Chatting /> */}
    </div>
  );
};

export default TopOrderState;
