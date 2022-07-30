import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";

const HostBeforeOrder = () => {
  return (
    <div class="HostBeforeOrder">
      <header class="header">
        <div class="tab-menu">
          <a href="state.html" class="active">
            주문현황
          </a>
          <a href="chat.html">채팅방</a>
        </div>
      </header>

      <section class="state">
        <div class="wrap">
          <div class="item-info">
            <div class="tit">BBQ 치킨 같이 시켜먹어요 😊</div>
            <div class="group">
              <div class="place">BBQ 치킨 아주대점</div>
              <div class="time">
                <Clock />
                &nbsp;마감 6:00pm
              </div>
            </div>
          </div>

          <div class="delivery-state">
            <div class="message">
              <img
                src={require("../../assets/img/ico_mark1.svg").default}
                alt=" "
              />
              &nbsp;배달 주문을 완료해주세요!
            </div>
            <div class="time">배달 주문 후 도착 예정시간을 입력해주세요.</div>
            <div class="inp-group-timer">
              <input type="text" placeholder="남은 시간" class="inp-timer" />
              <button type="button" class="btn-timer">
                시간 등록
              </button>
            </div>
          </div>

          <ol class="list-cart">
            <li>
              <div class="order-info">
                <div class="user">
                  <User />
                  &nbsp;치킨마니아
                </div>
                <div class="total-price">총금액: 15,000원</div>
              </div>

              <div class="menu-group">
                <div class="menu">
                  <div class="tit">순살 후라이드 양념 반반</div>
                  <div class="num">x 1개</div>
                  <div class="price">15,000원</div>
                </div>
              </div>
            </li>

            <li>
              <div class="order-info">
                <div class="user">
                  <User />
                  &nbsp;치킨마니아
                </div>
                <div class="total-price">총금액: 30,000원</div>
              </div>

              <div class="menu-group">
                <div class="menu">
                  <div class="tit">순살 양념치킨</div>
                  <div class="num">x 1개</div>
                  <div class="price">15,000원</div>
                </div>

                <div class="menu">
                  <div class="tit">순살 후라이드 치킨</div>
                  <div class="num">x 1개</div>
                  <div class="price">15,000원</div>
                </div>
              </div>
            </li>
          </ol>

          <ol class="order-result">
            <li>
              <div class="tit">그룹 음식 총 금액</div>
              <div class="txt">65,000원</div>
            </li>

            <li>
              <div class="tit">배달비</div>
              <div class="txt">4,000원</div>
            </li>

            <li>
              <div class="tit">
                <strong>총 금액</strong>
              </div>
              <div class="txt">
                <strong>69,000원</strong>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default HostBeforeOrder;
