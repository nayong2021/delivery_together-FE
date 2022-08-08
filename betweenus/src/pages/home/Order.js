import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import { useNavigate, Link, useParams } from "react-router-dom";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import { GetGroupBuyingMenuListApi } from "../../modules/api/GetGroupBuyingMenuListApi";
import { useState, useEffect } from "react";
import MenuItem from "../../components/home/MenuItem";

const Order = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [itemdata, setData] = useState({});
  const [menudata, setMenuData] = useState([]);

  const getList = async () => {
    const itemdata = await GetGroupBuyingMenuListApi(id);
    setData(itemdata);
    setMenuData(itemdata.menuList);
  };

  const onPlus = (title, value) => {
    setMenuData((current) => {
      return current.map((item) =>
        item.menuName === title
          ? {
              ...item,
              quantity: value + 1,
            }
          : item
      );
    });
  };
  const onMinus = (title, value) => {
    setMenuData((current) => {
      current.map((item) => console.log(item));
    });
  };

  useEffect(() => {
    getList();
  }, []);

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
                title={item.menuName}
                price={item.price}
                quantity={item.quantity}
                onMinus={onMinus}
                onPlus={onPlus}
              />
            ))}
          </ol>

          <div className="btn-group-bottom">
            <Link to={`ordersheet`}>
              <button type="button" className="btn-custom">
                주문 확인
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
