import * as React from "react";

export default function ChatTimeClock({
    createdAt
}) {
  return (
    <div className="chat-time">
      {createdAt[3] > 12 ? createdAt[3] - 12 : createdAt[3]}:
      {createdAt[4] < 10 ? ("0" + createdAt[4]) : createdAt[4]} 
      {createdAt[3] >= 12 ? " pm" : " am"}
    </div>
  );
}
