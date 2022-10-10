import * as React from "react";
import styled from "styled-components";

const MapItemDetail = () => {
  const ItemContainer = styled.div`
    position: absolute;
    width: 85%;
    height: 25%;
    top: 50%;
    left: 50%;
    margin: -190px 0 0 -190px;
    border-radius: 24px 24px 24px 24px;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background: #fff;
    z-index: 3;
  `;
  return <ItemContainer></ItemContainer>;
};

export default MapItemDetail;
