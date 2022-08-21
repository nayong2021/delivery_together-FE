import * as React from "react";
import { useState } from "react";
import "../../assets/css/common.css";
import { PostRecruitmentCloseApi } from "../../modules/api/orderstate/PostRecruitmentCloseApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import HostGusetParticipationItem from "./HostGusetParticipationItem"
import { PostParticipateAcceptApi } from "../../modules/api/orderstate/PostParticipateAcceptApi";
import { PostParticipateRefuseApi } from "../../modules/api/orderstate/PostParticipateRefuseApi";
import RefuseModal from "./RefuseModal"


const HostYesGuest = () => {
  const { orderInfo, setOrderInfo } = useStoreOrderInfo();
  const [ selectedMemberIdx, setSelectedMemberIdx ] = useState(0);
  const [ selectedIdx, setSelectedIdx ] = useState(0);
  const onClickRecuitmentClose = async () => {
    const result = await PostRecruitmentCloseApi(
      orderInfo.postIdx
    );
    if (result){
      setOrderInfo({
        ...orderInfo,
        postStatus: "RECRUITMENT_CLOSED",
      })
    }
  }

  const [ modalActivate, setModalActivate ] = useState(false);

  const onClickModalBack = () => {
    setModalActivate(false);
  }

  const onClickModalRefuse = async () => {
    const result = await PostParticipateRefuseApi(selectedMemberIdx, orderInfo.postIdx);
    if (result) {
      let newOrderLists = [...orderInfo.orderLists];
      newOrderLists[selectedIdx].agreeByHostStatus = "REFUSED";
      setOrderInfo({
        ...orderInfo,
        orderLists: newOrderLists,
        totalPrice: orderInfo.totalPrice - newOrderLists[selectedIdx].memberTotalPrice,
        currentParticipant: orderInfo.currentParticipant - 1
      })
    }
    setModalActivate(false);
  }

  const onClickGuestParticipationItemAccept = async (memberIdx, idx) => {
    const result = await PostParticipateAcceptApi(memberIdx, orderInfo.postIdx);
    if (result) {
      let newOrderLists = [...orderInfo.orderLists];
      newOrderLists[idx].agreeByHostStatus = "ACCEPTED";
      setOrderInfo({
        ...orderInfo,
        orderLists: newOrderLists
      })
    }
  }

  const onClickGuestParticipationItemRefuse = (memberIdx, idx) => {
    setModalActivate(true);
    setSelectedMemberIdx(memberIdx);
    setSelectedIdx(idx);
  }

  return (
    <div id="root">
      <RefuseModal 
      modalActivate={modalActivate}
      onClickBack={onClickModalBack}
      onClickRefuse={onClickModalRefuse}
      />
      <header className="header">
        <div className="hd hd-v1">
          <div className="hd-tit">그룹 장바구니</div>
        </div>
      </header>

      <section className="cart">
        <div className="wrap">
          <ol className="list-cart">
            {
              orderInfo.orderLists.map((item, idx) => (
                <HostGusetParticipationItem
                key={idx}
                index={idx}
                participationInfo={item}
                onClickAccept={onClickGuestParticipationItemAccept}
                onClickRefuse={onClickGuestParticipationItemRefuse}
                />
              ))
            }
          </ol>

          <ol className="order-result">
            <li>
              <div className="tit">그룹 음식 총 금액</div>
              <div className="txt">{orderInfo.totalPrice}원</div>
            </li>

            <li>
              <div className="tit">배달비</div>
              <div className="txt">4,000원</div>
              {/* <div className="txt">{orderInfo.expectedDeliveryFee}원</div> */}
            </li>

            <li>
              <div className="tit">
                <strong>총 금액</strong>
              </div>
              <div className="txt">
                <strong>{orderInfo.totalPrice + orderInfo.expectedDeliveryFee}원</strong>
              </div>
            </li>
          </ol>

          <button
            type="button"
            className="btn-custom btn-custom-v2 btn-complete"
            onClick={onClickRecuitmentClose}
          >
            모집완료
          </button>
        </div>
      </section>
    </div>
  );
};

export default HostYesGuest;
