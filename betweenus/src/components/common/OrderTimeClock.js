import * as React from "react";
import { ReactComponent as Clock } from "../../assets/img_renewal/ico_clock1.svg";

export default function OrderTimeClock({ timeToOrder }) {
  return timeToOrder ? (
    <div className="time">
      <Clock />
      &nbsp;모집 마감{" "}
      {timeToOrder
        ? (timeToOrder[0] > 12 ? timeToOrder[0] - 12 : timeToOrder[0]) +
          ":" +
          (timeToOrder[1] < 10 ? "0" : "") +
          timeToOrder[1] +
          (timeToOrder[0] >= 12 ? "pm" : "am")
        : null}
    </div>
  ) : null;
}
