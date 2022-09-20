import * as React from "react";

export default function ChatTimeClock({ hour, minute }) {
  return (
    <div className="chat-time">
      {hour > 12 ? hour - 12 : hour}:{minute < 10 ? "0" + minute : minute}
      {hour >= 12 ? " pm" : " am"}
    </div>
  );
}
