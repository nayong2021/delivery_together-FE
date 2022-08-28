import * as React from "react";
import "../../assets/css/common.css";
import { GetOrderStateApi } from "../../modules/api/orderstate/GetOrderStateApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

/* 배달 입력 시간 1: 50
현재 시간 1:58
입력된 시간 20분

(현재시간 – 배달 입력 시간)/20 = 8 / 20
남은시간: 배달 입력 + 입력된 시간 - 현재시간 */

// const elapsedMSec = date2.getTime() - date1.getTime(); // 9004000
// const elapsedSec = elapsedMSec / 1000; // 9004
// const elapsedMin = elapsedMSec / 1000 / 60; // 150.0666...
// const elapsedHour = elapsedMSec / 1000 / 60 / 60; // 2.501111...

const OrderComplete = () => {
  const id = useParams();
  const date = new Date();
  let inputTime;
  let nowTime;

  const getOrderState = async () => {
    const result = await GetOrderStateApi(id.index);
    inputTime = new Date(result.deliveryTimeInputTime);
    nowTime = new Date(date);
    console.log(inputTime);
    console.log(nowTime);
    console.log(result.timeToOrder);
  };

  useEffect(() => {
    getOrderState();
  }, []);

  return (
    <div className="delivery-state">
      <div className="message">주문 완료! :)</div>
      <div className="time">오후 7시 15분 도착 예정</div>
      <div className="timer">
        남은시간 <br />
        7분
      </div>
      <div className="progress-group">
        <div className="bg">
          <div className="current" style={{ width: "65%" }}>
            <span className="bubble">진행중</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;
