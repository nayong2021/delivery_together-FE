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
import Loading from "../../components/common/Loading";

const State = () => {
  const { orderInfo, setOrderInfo, setSelectedIndex } = useStoreOrderInfo();
  const [isLoaded, setLoaded] = React.useState(false);

  const id = useParams();

  const getList = async () => {
    setSelectedIndex(id.index);
    const data = await GetOrderStateApi(id.index);
    setOrderInfo(data);
    setLoaded(true);
  };

  useEffect(() => {
    getList();
  }, [id]);

  return (
    <>
      <MetaTag />
      {isLoaded ? (
        <>
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
            <TopOrderState />
          ) : null}
          {!orderInfo.currentUserIsHost &&
          orderInfo.postStatus === "RECRUITING" ? (
            <GuestWaitRecruit />
          ) : null}
          {!orderInfo.currentUserIsHost &&
          !(orderInfo.postStatus === "RECRUITING") ? (
            <TopOrderState />
          ) : null}
          <BottomNavigation />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default State;
