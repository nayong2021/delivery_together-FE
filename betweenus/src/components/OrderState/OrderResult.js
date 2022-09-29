import * as React from "react";
import useStoreOrderInfo from "../../store/storeOrderInfo";

export default function OrderResult() {
  const { orderInfo } = useStoreOrderInfo();

  console.log(orderInfo);

  return (
    <>
      {Object.keys(orderInfo).length !== 0 ? (
        <ol className="order-result">
          <li>
            <div className="tit">그룹 음식 총 금액</div>
            <div className="txt">{orderInfo.totalPrice.toLocaleString()}원</div>
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
              <strong>
                {(
                  orderInfo.totalPrice + orderInfo.expectedDeliveryFee
                ).toLocaleString()}
                원
              </strong>
            </div>
          </li>
        </ol>
      ) : null}
    </>
  );
}
