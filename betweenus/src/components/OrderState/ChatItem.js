import * as React from "react";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";
import ChatTimeClock from "../common/ChatTimeClock";

export default function ChatItem({
  writerNickname,
  contents,
  createdAt,
  writerStatus,
  innerRef,
}) {
  const date = new Date(createdAt);

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
