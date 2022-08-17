import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import { useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import { GetGroupBuyingMenuListApi } from "../../modules/api/home/GetGroupBuyingMenuListApi";
import { useState, useEffect, useCallback } from "react";
import MenuItem from "../../components/home/MenuItem";
import useStoreMenu from "../../store/storeMenu";

const Order = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [itemdata, setData] = useState({});
  const { menudata, setMenudata, plusMenudata, minusMenudata } = useStoreMenu();

  const getList = useCallback(async () => {
    const data = await GetGroupBuyingMenuListApi(id);
    setData(data);
    setMenudata(data.menuList);
  }, [setMenudata, id]);

  useEffect(() => {
    getList();
  }, [getList]);

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
            주문하기
          </div>
        </div>
      </header>

      <section className="item-view">
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
            예상배달비: {itemdata.expectedDeliveryFee} 원 /{" "}
            {itemdata.currentParticipant} 명
          </div>

          <ol className="list-menu">
            {menudata.map((item, idx) => (
              <MenuItem
                key={idx}
                menuName={item.menuName}
                price={item.price}
                quantity={item.quantity}
                minusMenudata={minusMenudata}
                plusMenudata={plusMenudata}
              />
            ))}
          </ol>

          <div className="btn-group-bottom">
            <button
              type="button"
              className="btn-custom"
              onClick={() => navigate("ordersheet")}
            >
              주문 확인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
