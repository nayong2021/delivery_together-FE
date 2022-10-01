import * as React from "react";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";
import { useState, useEffect } from "react";
import ChatTimeClock from "../common/ChatTimeClock";

export default function ChatItem({
  writerNickname,
  contents,
  createdAt,
  writerStatus,
  innerRef,
  // user,
}) {
  const [self, setSelf] = useState(false);
  const date = new Date(createdAt);

  // useEffect(() => {
  //   if (writerStatus === String(user)) {
  //     setSelf(true);
  //   }
  // }, []);
  return writerStatus ? (
    <li ref={innerRef}>
      <div className="ly-r">
        <div className="chat-content">
          <div className="bubble">{contents}</div>
          <ChatTimeClock hour={date.getHours()} minute={date.getMinutes()} />
        </div>
      </div>
    </li>
  ) : (
    <li ref={innerRef}>
      <div className="ly-l">
        <div className="user-info">
          <User />
          <div className="nickname">&nbsp;&nbsp;{writerNickname}</div>
        </div>
        <div className="chat-content">
          <div className="bubble">{contents}</div>
          <ChatTimeClock hour={date.getHours()} minute={date.getMinutes()} />
        </div>
      </div>
    </li>
  );
}
