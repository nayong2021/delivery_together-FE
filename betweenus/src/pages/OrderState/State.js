import * as React from "react";
import { useEffect } from "react";
import "../../assets/css/common.css";
import { useParams } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import BottomNavigation from "../../components/common/BottomNavigation";
import JoinBefore from "../../components/orderState/JoinBefore";
import HostNoGuest from "../../components/orderState/HostNoGuest";
import HostYesGuest from "../../components/orderState/HostYesGuest";
import GuestWaitRecruit from "../../components/orderState/GuestWaitRecruit";
import TopOrderState from "../../components/orderState/TopOrderState";
import { GetOrderStateApi } from "../../modules/api/orderstate/GetOrderStateApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";

const State = () => {
  const { orderInfo, setOrderInfo } = useStoreOrderInfo();

  const id = useParams();

  const getList = async () => {
    const data = await GetOrderStateApi(id.index);
    setOrderInfo(data);
  }

  useEffect(() => {
    getList();
  }, [id]);

  return (
    <>
        <MetaTag />  
        {
        !orderInfo ? <JoinBefore /> : null            
          }
          {
          (orderInfo.currentUserIsHost && orderInfo.postStatus === "RECRUITING" && orderInfo.currentParticipant === 1) ? 
          <HostNoGuest /> : null
          }
          {
          (orderInfo.currentUserIsHost && orderInfo.postStatus === "RECRUITING" && orderInfo.currentParticipant > 1) ? 
          <HostYesGuest /> : null
          }
          {
          (orderInfo.currentUserIsHost && !(orderInfo.postStatus === "RECRUITING") && orderInfo.currentParticipant > 1) ? 
          <TopOrderState /> : null
          }
          {
          (!orderInfo.currentUserIsHost && orderInfo.postStatus === "RECRUITING") ? 
          <GuestWaitRecruit /> : null
          }
          {
          (!orderInfo.currentUserIsHost && !(orderInfo.postStatus === "RECRUITING")) ? 
          <TopOrderState /> : null
          }
        <BottomNavigation />
      </>
  )
};

export default State;
