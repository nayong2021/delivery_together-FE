import * as React from "react";
import "../../assets/css/common.css";
import { useParams, useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { useState, useEffect } from "react";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import useStoreMenu from "../../store/storeMenu";
import OrderSheetItem from "../../components/home/OrderSheetItem";
import { GetGroupBuyingMenuListApi } from "../../modules/api/GetGroupBuyingMenuListApi";

const OrderSheet = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [itemdata, setData] = useState({});
  const { menudata, plusMenudata, minusMenudata } = useStoreMenu();

  const getList = async () => {
    const data = await GetGroupBuyingMenuListApi(id);
    setData(data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div id="root">
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
            <div className="tit">{itemdata.title}</div>
            <div className="group">
              <div className="place">{itemdata.storeName}</div>
              <div className="time">
                <Clock />
                &nbsp;마감 {itemdata.timeToOrder}
              </div>
            </div>
          </div>

          <div className="delivery-charge">
            예상배달비: {itemdata.expectedDeliveryFee}원 /{" "}
            {itemdata.currentParticipant}명
          </div>

          <ol className="list-order">
            {menudata.map((item, idx) =>
              item.quantity > 0 ? (
                <OrderSheetItem
                  key={idx}
                  menuName={item.menuName}
                  price={item.price}
                  quantity={item.quantity}
                  minusMenudata={minusMenudata}
                  plusMenudata={plusMenudata}
                />
              ) : null
            )}
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
