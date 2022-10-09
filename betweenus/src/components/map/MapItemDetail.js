import * as React from "react";
import styled from "styled-components";

const MapItemDetail = () => {
  const ItemContainer = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 24px 24px 0 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    background: #fff;
  `;
  return <ItemContainer></ItemContainer>;
};

export default MapItemDetail;
