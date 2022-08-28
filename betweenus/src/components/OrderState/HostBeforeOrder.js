import * as React from "react";
import { useState } from "react";
import "../../assets/css/common.css";
import { useParams } from "react-router-dom";
import { ReactComponent as Warning } from "../../assets/img/ico_mark1.svg";
import { PostDeliveryTimeApi } from "../../modules/api/orderstate/PostDeliveryTimeApi";
import { GetOrderStateApi } from "../../modules/api/orderstate/GetOrderStateApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";

const HostBeforeOrder = () => {
  const { orderInfo, setOrderInfo } = useStoreOrderInfo();
  const [inputTime, setInputTime] = useState("");

  const id = useParams();
  const onClickPostTime = async () => {
    const result = await PostDeliveryTimeApi(orderInfo.postIdx, inputTime);
    if (result) {
      const data = await GetOrderStateApi(id.index);
      setOrderInfo(data);
    }
  };
  const handleInputTime = (e) => {
    setInputTime(e.target.value);
  };
  return (
    <div className="delivery-state">
      <div className="message">
        <Warning />
        &nbsp;배달 주문을 완료해주세요!
      </div>
      <div className="time">배달 주문 후 도착 예정시간을 입력해주세요.</div>
      <div className="inp-group-timer">
        <input
          type="number"
          placeholder="남은 시간 (분)"
          className="inp-timer"
          value={inputTime}
          onChange={handleInputTime}
        />
        <button type="button" className="btn-timer" onClick={onClickPostTime}>
          시간 등록
        </button>
      </div>
    </div>
  );
};

export default HostBeforeOrder;
