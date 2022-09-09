import * as React from "react";
import { useEffect } from "react";
import "../../assets/css/common.css";
import { Outlet, useParams } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import JoinBefore from "../../components/orderState/JoinBefore";
import HostNoGuest from "../../components/orderState/HostNoGuest";
import HostYesGuest from "../../components/orderState/HostYesGuest";
import GuestWaitRecruit from "../../components/orderState/GuestWaitRecruit";
import { GetOrderStateApi } from "../../modules/api/orderstate/GetOrderStateApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import BackBtn from "../../components/settings/BackBtn";
import OrderStateBar from "../../components/orderState/OrderStateBar";

const OrderHistoryState = () => {
  const { orderInfo, setOrderInfo, setSelectedIndex } = useStoreOrderInfo();

  const id = useParams();

  const getList = async () => {
    setSelectedIndex(id.index);
    const data = await GetOrderStateApi(id.index);
    setOrderInfo(data);
  };

  useEffect(() => {
    getList();
  }, [id]);

  return (
    <>
      <MetaTag />
      <header className="header">
        <BackBtn text={"주문 내역"}/>
        {!(orderInfo.postStatus === "RECRUITING") ? ( 
        <OrderStateBar
        path={"/setting/orderhistory"}/>) : null}
      </header>
      {!orderInfo ? <JoinBefore /> : null}
      {orderInfo.currentUserIsHost &&
      orderInfo.postStatus === "RECRUITING" &&
      orderInfo.currentParticipant === 1 ? (
        <HostNoGuest />
      ) : null}
      {orderInfo.currentUserIsHost &&
      orderInfo.postStatus === "RECRUITING" &&
      orderInfo.currentParticipant > 1 ? (
        <HostYesGuest />
      ) : null}
      {orderInfo.currentUserIsHost &&
      !(orderInfo.postStatus === "RECRUITING") &&
      orderInfo.currentParticipant > 1 ? (
        <div style={{paddingTop: 50}}>
            <Outlet />
        </div>
      ) : null}
      {!orderInfo.currentUserIsHost && orderInfo.postStatus === "RECRUITING" ? (
        <GuestWaitRecruit />
      ) : null}
      {!orderInfo.currentUserIsHost &&
      !(orderInfo.postStatus === "RECRUITING") ? (
        <div style={{paddingTop: 50}}>
            <Outlet />
        </div>
      ) : null}
    </>
  );
};

export default OrderHistoryState;
