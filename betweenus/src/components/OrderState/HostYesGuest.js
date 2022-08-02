import * as React from "react";
import "../../assets/css/common.css";
import { ReactComponent as User1 } from "../../assets/img/ico_user1.svg";

const HostYesGuest = () => {
  return (
    <div id="root">
      <header className="header">
        <div className="hd hd-v1">
          <div className="hd-tit">그룹 장바구니</div>
        </div>
      </header>

      <section className="cart">
        <div className="wrap">
          <ol className="list-cart">
            <li>
              <div className="order-info">
                <div className="user">
                  <User1 />
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

              <div className="btn-group-order">
                <button type="button" className="btn btn-custom btn-custom-v1">
                  수락
                </button>
                <button type="button" className="btn btn-custom btn-custom-v2">
                  거절
                </button>
              </div>
            </li>

            <li>
              <div className="order-info">
                <div className="user">
                  <User1 />
                  &nbsp;치킨마니아
                </div>
                <div className="total-price">총금액: 20,000원</div>
              </div>

              <div className="menu-group">
                <div className="menu">
                  <div className="tit">황금 올리브 치킨</div>
                  <div className="num">x 2개</div>
                  <div className="price">20,000원</div>
                </div>
              </div>

              <div className="btn-group-order">
                <button type="button" className="btn btn-custom">
                  수락
                </button>
                <button type="button" className="btn btn-custom btn-custom-v2">
                  거절
                </button>
              </div>
            </li>

            <li>
              <div className="order-info">
                <div className="user">
                  <User1 />
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

              <div className="btn-group-order">
                <button type="button" className="btn btn-custom btn-custom-v1">
                  수락
                </button>
                <button type="button" className="btn btn-custom btn-custom-v2">
                  거절
                </button>
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

          <button
            type="button"
            className="btn-custom btn-custom-v2 btn-complete"
          >
            모집완료
          </button>
        </div>
      </section>
    </div>
  );
};

export default HostYesGuest;
