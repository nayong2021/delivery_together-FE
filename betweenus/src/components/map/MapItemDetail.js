import * as React from "react";
import styled from "styled-components";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";
import { useState, useEffect } from "react";
import OrderTimeClock from "../common/OrderTimeClock";

const MapItemDetail = (index) => {
  // console.log(index);
  const [list, setList] = useState([]);
  const [clickedInfo, setInfo] = useState({});

  let temp;
  const ItemContainer = styled.div`
    position: absolute;
    top: 60%;
    width: 88%;
    height: 25%;
    border-radius: 24px 24px 24px 24px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    background: #fff;
    z-index: 3;
  `;

  const ImgContainer = styled.img`
    border-radius: 24px 24px 0px 0px;
    height: 60%;
    object-fit: cover;
  `;

  const getList = async () => {
    temp = await GetJoinableGroupBuyingApi();
    // console.log(index.index);
    console.log(temp[index.index].additionalInfo);
    setList(temp);
    setInfo(temp[index.index]);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <ItemContainer>
        {clickedInfo.storeLogoUrl ? (
          <ImgContainer
            src={clickedInfo.storeLogoUrl}
            alt="썸네일"
            className="thumb"
          />
        ) : null}
        <div className="list-item" style={{ padding: "0px 9px 28px 16px" }}>
          <div className="tit" style={{ textAlign: "left" }}>
            {clickedInfo.title}
          </div>
          <div className="place" style={{ textAlign: "left" }}>
            {clickedInfo.storeName}
          </div>
          <div className="info-group">
            <div className="time">
              <OrderTimeClock timeToOrder={clickedInfo.timeToOrder} />
            </div>
            <div className="info">
              <span className="price">
                예상배달비: {clickedInfo.expectedDeliveryFee}원 /{" "}
                {clickedInfo.currentParticipant}명
              </span>
              {/* <span className="distance">{clickedInfo.distance}</span> */}
            </div>
          </div>
        </div>
      </ItemContainer>
    </>
  );
};

export default MapItemDetail;
