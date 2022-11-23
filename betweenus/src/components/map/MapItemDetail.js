import * as React from "react";
import styled from "styled-components";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";
import { useState, useEffect } from "react";
import OrderTimeClock from "../common/OrderTimeClock";
import { useNavigate } from "react-router-dom";

const MapItemDetail = (index) => {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [clickedInfo, setInfo] = useState({});

  let temp;

  const ImgContainer = styled.img`
    border-radius: 24px 24px 0px 0px;
    height: 60%;
    object-fit: cover;
  `;

  const onClickItem = () => {
    navigate(`/itemview/${clickedInfo.postIdx}`);
  };

  const printDistance = (distance) => {
    distance /= 1000;
    if (distance < 1) {
      return Math.round(distance * 1000) + "m";
    } else {
      return distance.toFixed(1) + "km";
    }
  };

  const getList = async () => {
    temp = await GetJoinableGroupBuyingApi();
    setList(temp);
    setInfo(temp[index.index]);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <div
        className="item-container"
        style={{ zIndex: "3" }}
        onClick={onClickItem}
      >
        {clickedInfo.backgroundUrl ? (
          <ImgContainer
            src={clickedInfo.backgroundUrl}
            alt="썸네일"
            className="thumb"
          />
        ) : null}
        <div className="list-item">
          <li>
            <a style={{ padding: "3px 24px 5px 24px" }}>
              <div class="img-group">
                <img
                  src={clickedInfo.storeLogoUrl}
                  alt="썸네일"
                  class="thumb"
                />
              </div>
              <div className="item-info" style={{ textAlign: "left" }}>
                <div className="time">
                  <OrderTimeClock timeToOrder={clickedInfo.timeToOrder} />
                </div>
                <div className="tit">{clickedInfo.title}</div>
                <div className="place" style={{ marginBottom: "0" }}>
                  {clickedInfo.storeName}
                </div>
                <div className="etc-info">
                  <div className="distance">
                    {printDistance(clickedInfo.distance)}
                  </div>
                  <div className="price">
                    예상배달비: {clickedInfo.expectedDeliveryFee}원 /{" "}
                    {clickedInfo.currentParticipant}명
                  </div>
                </div>
              </div>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default MapItemDetail;
