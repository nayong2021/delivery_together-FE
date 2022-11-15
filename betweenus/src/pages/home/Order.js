import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import { useNavigate, useParams } from "react-router-dom";
import { GetGroupBuyingMenuListApi } from "../../modules/api/home/GetGroupBuyingMenuListApi";
import { useState, useEffect, useCallback } from "react";
import MenuCategory from "../../components/home/MenuCategory";
import MenuOption from "../../components/home/MenuOption";
import { ReactComponent as Arrow } from "../../assets/img_renewal/ico_arrow_right1.svg";
import { ReactComponent as Clock } from "../../assets/img_renewal/ico_clock1.svg";

const Order = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [itemdata, setData] = useState({});
  const [menuList, setMenuList] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState({});
  const [popupState, setPopupState] = useState(false);
  const [orderList, setOrderList] = useState([]);
  const timeToOrder = itemdata.timeToOrder
    ? itemdata.timeToOrder.split(":")
    : null;

  const getList = useCallback(async () => {
    const data = await GetGroupBuyingMenuListApi(id);
    setData(data);
    setMenuList(data.menuList);
  }, [id]);

  const onMenuClick = (menuData) => {
    setSelectedMenu(menuData);
    setPopupState(true);
  };

  const onPopupBackBtnClick = () => {
    setPopupState(false);
    setSelectedMenu({});
  };

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <div id="root">
      <MetaTag />
      <MenuOption
        menuData={selectedMenu}
        open={popupState}
        onPopupBackBtnClick={onPopupBackBtnClick}
        setOrderList={setOrderList}
      />
      <header className="header-v2">
        <div className="hd-v2">
          <button
            type="button"
            className="hd-back"
            onClick={() => navigate(-1)}
          ></button>
          <div className="hd-tit">주문하기</div>
        </div>
      </header>

      <section className="item-view">
        <div className="top">
          <div className="item-info">
            <div className="time">
              <Clock />
              &nbsp;마감&nbsp;
              {timeToOrder
                ? Number(
                    timeToOrder[0] > 12 ? timeToOrder[0] - 12 : timeToOrder[0]
                  ) +
                  ":" +
                  (timeToOrder[1] < 10 ? "0" : "") +
                  timeToOrder[1] +
                  (timeToOrder[0] >= 12 ? "pm" : "am")
                : null}
            </div>
            <div className="tit">{itemdata.title}</div>
            <a href="#" className="place">
              {itemdata.storeName}
              <Arrow />
            </a>
          </div>
        </div>
        <div className="wrap">
          {menuList
            ? menuList.map((item, idx) => (
                <MenuCategory
                  key={idx}
                  categoryList={item}
                  onMenuClick={onMenuClick}
                ></MenuCategory>
              ))
            : null}

          <div className="btn-group-bottom2">
            <div className="price">
              <div className="tit">예상 배달비</div>
              <div className="txt">
                {itemdata.expectedDeliveryFee}원/
                {itemdata.currentParticipant
                  ? itemdata.currentParticipant.toLocaleString()
                  : null}
                명
              </div>
            </div>

            <button
              type="button"
              className="btn-custom-v3"
              onClick={() => navigate("ordersheet", { state: orderList })}
            >
              참여하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;
