import * as React from "react";
import "../../assets/css/common.css";
import { useParams, useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import data from "../../pages/home/home.json";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";

const OrderSheet = () => {
  const id = useParams();
  const navigate = useNavigate();
  const itemdata = data.rooms[id.index];
  return (
    <div className="OrderSheet">
      <MetaTag />
      <header className="header">
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            내 주문서
          </div>
        </div>
      </header>

      <section className="order-sheet">
        <div className="wrap">
          <div className="item-info">
            <div className="tit">{itemdata.tit}</div>
            <div className="group">
              <div className="place">{itemdata.place}</div>
              <div className="time">
                <Clock />
                &nbsp;마감 6:00pm
              </div>
            </div>
          </div>

          <div className="delivery-charge">{itemdata.price}</div>

          <ol className="list-order">
            <li>
              <div className="menu">순살 후라이드 양념 반반</div>
              <div className="price">15,000원</div>
              <div className="order-count">
                <button type="button" className="btn-minus"></button>
                <div className="num">1개</div>
                <button type="button" className="btn-plus"></button>
              </div>
            </li>

            <li>
              <div className="menu">순살 후라이드 양념 반반</div>
              <div className="price">15,000원</div>
              <div className="order-count">
                <button type="button" className="btn-minus"></button>
                <div className="num">1개</div>
                <button type="button" className="btn-plus"></button>
              </div>
            </li>

            <li>
              <div className="menu">순살 후라이드 양념 반반</div>
              <div className="price">15,000원</div>
              <div className="order-count">
                <button type="button" className="btn-minus"></button>
                <div className="num">1개</div>
                <button type="button" className="btn-plus"></button>
              </div>
            </li>
          </ol>

          <ol className="order-result">
            <li>
              <div className="tit">음식 총 금액</div>
              <div className="txt">65,000원</div>
            </li>

            <li>
              <div className="tit">배달비</div>
              <div className="txt">?원</div>
            </li>

            <li>
              <div className="tit">
                <strong>총 금액</strong>
              </div>
              <div className="txt">
                <strong>65,000원</strong>
              </div>
            </li>
          </ol>

          <div className="order-message">
            주문서 전달 이후 호스트에게 정확한 공동구매 배달비를 <br />
            안내받아 주문 금액과 함께 전달해주세요!
          </div>

          <div className="btn-group-bottom">
            <button type="button" className="btn-custom">
              주문서 전달
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderSheet;
