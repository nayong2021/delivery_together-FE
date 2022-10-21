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
    console.log("clicked");
    navigate(`/itemview/${clickedInfo.postIdx}`);
  };

  const getList = async () => {
    temp = await GetJoinableGroupBuyingApi();
    console.log(temp[index.index].additionalInfo);
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
        {clickedInfo.storeLogoUrl ? (
          <ImgContainer
            src={clickedInfo.storeLogoUrl}
            alt="썸네일"
            className="thumb"
          />
        ) : null}
        <div className="list-item" style={{ padding: "1px 9px 28px 15px" }}>
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
      </div>
    </>
  );
};

export default MapItemDetail;
