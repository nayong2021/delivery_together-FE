import * as React from "react";
import "../../assets/css/common.css";
import { PostRecruitmentCloseApi } from "../../modules/api/orderstate/PostRecruitmentCloseApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import HostGusetParticipationItem from "./HostGusetParticipationItem"

const HostYesGuest = () => {
  const { orderInfo, setOrderInfo } = useStoreOrderInfo();
  const onClickRecuitmentClose = async () => {
    const result = await PostRecruitmentCloseApi(
      orderInfo.postIdx
    );
    if (result){
      setOrderInfo({
        ...orderInfo,
        postStatus: "RECRUITMENT_CLOSED"
      })
    }
  }
  return (
    <div id="root">
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
                participationInfo={item}/>
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
