import * as React from "react";
import "../../assets/css/common.css";
import HostBeforeOrder from "./HostBeforeOrder";
import GuestBeforeOrder from "./GuestBeforeOrder";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";
import OrderComplete from "./OrderComplete";

const OrderState = () => {
  const user = "guest";
  const order = true;
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
        <div className="item-info">
          <div className="tit">BBQ 치킨 같이 시켜먹어요 😊</div>
          <div className="group">
            <div className="place">BBQ 치킨 아주대점</div>
            <div className="time">
              <Clock />
              &nbsp;마감 6:00pm
            </div>
          </div>
        </div>

        {component}

        <ol className="list-cart">
          <li>
            <div className="order-info">
              <div className="user">
                <User />
                &nbsp;치킨마니아
              </div>
              <div className="total-price">총금액: 15,000원</div>
            </div>

            <div className="menu-group">
              <div className="menu">
                <div className="tit">순살 후라이드 양념 반반</div>
                <div className="num">x 1개</div>
                <div className="price">15,000원</div>
              </div>
            </div>
          </li>

          <li>
            <div className="order-info">
              <div className="user">
                <User />
                &nbsp;치킨마니아
              </div>
              <div className="total-price">총금액: 30,000원</div>
            </div>

            <div className="menu-group">
              <div className="menu">
                <div className="tit">순살 양념치킨</div>
                <div className="num">x 1개</div>
                <div className="price">15,000원</div>
              </div>

              <div className="menu">
                <div className="tit">순살 후라이드 치킨</div>
                <div className="num">x 1개</div>
                <div className="price">15,000원</div>
              </div>
            </div>
          </li>
        </ol>

        <ol className="order-result">
          <li>
            <div className="tit">그룹 음식 총 금액</div>
            <div className="txt">65,000원</div>
          </li>

          <li>
            <div className="tit">배달비</div>
            <div className="txt">4,000원</div>
          </li>

          <li>
            <div className="tit">
              <strong>총 금액</strong>
            </div>
            <div className="txt">
              <strong>69,000원</strong>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default OrderState;
