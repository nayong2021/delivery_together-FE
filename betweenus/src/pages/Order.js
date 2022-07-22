import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Clock } from "../assets/img/ico_clock1.svg";
import foodpic from "../assets/img/img_picture1.jpg";

const Order = () => {
  const navigate = useNavigate();

  return (
    <div className="Order">
      <MetaTag />
      <header className="header">
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            주문하기
          </div>
        </div>
      </header>

      <section className="item-view">
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

          <div className="delivery-charge">예상배달비: 4000원 / 3명</div>

          <ol className="list-menu">
            <li>
              <div className="img-group">
                <img src={foodpic} alt="썸네일" className="thumb" />
              </div>

              <div className="menu-info">
                <div className="tit">[BBQ주문1위]황금올리브치킨</div>
                <div className="price">20,000원</div>
                <div className="order-count">
                  <button type="button" className="btn-minus"></button>
                  <div className="num">1개</div>
                  <button type="button" className="btn-plus"></button>
                </div>
              </div>
            </li>

            <li>
              <div className="img-group">
                <img
                  src={foodpic}
                  alt="썸네일"
                  className="thumb"
                  max-width={"100%"}
                  height={"auto"}
                />
              </div>

              <div className="menu-info">
                <div className="tit">황금올리브닭다리</div>
                <div className="price">21,000원</div>
                <div className="order-count">
                  <button type="button" className="btn-minus"></button>
                  <div className="num">1개</div>
                  <button type="button" className="btn-plus"></button>
                </div>
              </div>
            </li>

            <li>
              <div className="img-group">
                <img src={foodpic} alt="썸네일" className="thumb" />
              </div>

              <div className="menu-info">
                <div className="tit">황금올리브 핫 윙</div>
                <div className="price">20,000원</div>
                <div className="order-count">
                  <button type="button" className="btn-minus"></button>
                  <div className="num">0개</div>
                  <button type="button" className="btn-plus"></button>
                </div>
              </div>
            </li>

            <li>
              <div className="img-group">
                <img src={foodpic} alt="썸네일" className="thumb" />
              </div>

              <div className="menu-info">
                <div className="tit">황금올리브 핫 윙</div>
                <div className="price">20,000원</div>
                <div className="order-count">
                  <button type="button" className="btn-minus"></button>
                  <div className="num">0개</div>
                  <button type="button" className="btn-plus"></button>
                </div>
              </div>
            </li>
          </ol>

          <div className="btn-group-bottom">
            <button type="button" className="btn-custom">
              주문 확인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
