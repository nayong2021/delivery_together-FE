import * as React from "react";
import styled from "styled-components";

const MapItemDetail = () => {
  const ItemContainer = styled.div`
    position: absolute;
    width: 85%;
    height: 25%;
    margin: 500px 30px 30px 30px;
    border-radius: 24px 24px 24px 24px;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.35);
    box-sizing: border-box;
    background: #fff;
    z-index: 3;
  `;
  return <ItemContainer></ItemContainer>;
};

export default MapItemDetail;
