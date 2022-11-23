import * as React from "react";
import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const spin = keyframes`
to {
  transform: rotate(360deg);
}
`;

const LoadindSpinner = styled.div({
  display: "inline-block",
  width: "50px",
  height: "50px",
  border: "7px solid #FD8E28",
  borderRadius: "50%",
  borderTopColor: `#f87344`,
  animation: `${spin} 1s linear infinite`,
});

export default function Loading() {
  return (
    <div className="no-data">
      <LoadindSpinner />
    </div>
  );
}
