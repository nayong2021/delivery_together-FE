import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";
import BottomNavigation from "../components/common/BottomNavigation";
import { ReactComponent as User1 } from "../assets/img/ico_user1.svg";

const State = () => {
  return (
    <div className="Map">
      <MetaTag />

      <header class="header">
        <div class="hd hd-v1">
          <div class="hd-tit">그룹 장바구니</div>
        </div>
      </header>

      <section class="cart">
        <div class="wrap">
          <ol class="list-cart">
            <li>
              <div class="order-info">
                <div class="user">
                  <User1 />
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

              <div class="btn-group-order">
                <button type="button" class="btn btn-custom btn-custom-v1">
                  수락
                </button>
                <button type="button" class="btn btn-custom btn-custom-v2">
                  거절
                </button>
              </div>
            </li>

            <li>
              <div class="order-info">
                <div class="user">
                  <User1 />
                  &nbsp;치킨마니아
                </div>
                <div class="total-price">총금액: 20,000원</div>
              </div>

              <div class="menu-group">
                <div class="menu">
                  <div class="tit">황금 올리브 치킨</div>
                  <div class="num">x 2개</div>
                  <div class="price">20,000원</div>
                </div>
              </div>

              <div class="btn-group-order">
                <button type="button" class="btn btn-custom">
                  수락
                </button>
                <button type="button" class="btn btn-custom btn-custom-v2">
                  거절
                </button>
              </div>
            </li>

            <li>
              <div class="order-info">
                <div class="user">
                  <User1 />
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

              <div class="btn-group-order">
                <button type="button" class="btn btn-custom btn-custom-v1">
                  수락
                </button>
                <button type="button" class="btn btn-custom btn-custom-v2">
                  거절
                </button>
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

          <button type="button" class="btn-custom btn-custom-v2 btn-complete">
            모집완료
          </button>
        </div>
      </section>

      <BottomNavigation />
    </div>
  );
};

export default State;
