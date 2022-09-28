import * as React from "react";
import "../../assets/css/common.css";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { useState, useEffect, useCallback } from "react";
import OrderSheetItem from "../../components/home/OrderSheetItem";
import { GetGroupBuyingMenuListApi } from "../../modules/api/home/GetGroupBuyingMenuListApi";
import { PostParticipationgApi } from "../../modules/api/home/PostParticipationApi";
import OrderTimeClock from "../../components/common/OrderTimeClock";

const OrderSheet = () => {
  const id = useParams();
  const navigate = useNavigate();
  const [itemdata, setData] = useState({});
  const [orderList, setOrderList] = useState([]);

  const { state } = useLocation();

  const getList = useCallback(async () => {
    const data = await GetGroupBuyingMenuListApi(id);
    setData(data);
  }, [id]);

  const onSubmitOrder = () => {
    if (orderList.length > 0) {
      let requestBody = { orderItems: [] };
      orderList.forEach((orderInfo) => {
        let orderItem = {};
        orderItem.menuName = orderInfo.menuData.name;
        orderItem.quantity = orderInfo.quantity;
        orderItem.price = Number(orderInfo.menuData.price);
        orderItem.options = [];
        orderInfo.options.forEach((option) => {
          let optionItem = {};
          optionItem.optionName = option.name;
          optionItem.price = Number(option.price);
          orderItem.options.push(optionItem);
        });
        requestBody.orderItems.push(orderItem);
      });
      PostParticipationgApi(id, requestBody);
      navigate("/");
    }
  };

  const calEachOrderPrice = (orderInfo) => {
    let totalPrice = Number(orderInfo.menuData.price);
    orderInfo.options.forEach((item) => {
      totalPrice += Number(item.price);
    });
    totalPrice *= orderInfo.quantity;
    return totalPrice;
  };

  const calTotalOrderPrice = () => {
    let totalPrice = 0;
    orderList.forEach((orderInfo) => {
      totalPrice += calEachOrderPrice(orderInfo);
    });
    return totalPrice.toLocaleString();
  };

  const totalPrice = calTotalOrderPrice();

  const deleteOrder = (orderInfo) => {
    const filtered = orderList.filter((el) => el !== orderInfo);
    setOrderList(filtered);
  };

  useEffect(() => {
    getList();
    setOrderList(state);
  }, [state]);

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
                <OrderTimeClock timeToOrder={itemdata.timeToOrder} />
              </div>
            </div>
          </div>

          <div className="delivery-charge">
            예상배달비: {itemdata.expectedDeliveryFee} 원 /{" "}
            {itemdata.currentParticipant}명
          </div>

          <ol className="list-order">
            {orderList.map((item, idx) => {
              return (
                <OrderSheetItem
                  key={idx}
                  index={idx}
                  orderInfo={item}
                  setOrderList={setOrderList}
                  deleteOrder={deleteOrder}
                />
              );
            })}
          </ol>

          <ol className="order-result">
            <li>
              <div className="tit">음식 총 금액</div>
              <div className="txt">{totalPrice}원</div>
            </li>

            <li>
              <div className="tit">배달비</div>
              <div className="txt">? 원</div>
            </li>

            <li>
              <div className="tit">
                <strong>총 금액</strong>
              </div>
              <div className="txt">
                <strong>{totalPrice}원</strong>
              </div>
            </li>
          </ol>

          <div className="order-message">
            주문서 전달 이후 호스트에게 정확한 공동구매 배달비를 <br />
            안내받아 주문 금액과 함께 전달해주세요!
          </div>

          <div className="btn-group-bottom">
            <button
              type="button"
              className="btn-custom"
              // onClick={onSubmitOrder}
              onClick={onSubmitOrder}
            >
              주문서 전달
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrderSheet;
