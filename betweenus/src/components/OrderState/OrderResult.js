import * as React from "react";
import useStoreOrderInfo from "../../store/storeOrderInfo";

export default function OrderResult() {
  const { orderInfo } = useStoreOrderInfo();

  return (
    <>
      {Object.keys(orderInfo).length !== 0 ? (
        <div className="price-group">
          <div className="type">
            <div className="tit">그룹 음식 총 금액</div>
            <div className="price">
              {orderInfo.totalPrice.toLocaleString()}원
            </div>
          </div>

          <div className="type">
            <div className="tit">배달비</div>
            <div className="price price-v1">
              {orderInfo.expectedDeliveryFee.toLocaleString()}원
            </div>
          </div>

          <div className="type">
            <div className="tit">
              <strong>최종 결제금액</strong>
            </div>
            <div className="price price-v2">
              <strong>
                {(
                  orderInfo.totalPrice + orderInfo.expectedDeliveryFee
                ).toLocaleString()}
              </strong>
              원
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
