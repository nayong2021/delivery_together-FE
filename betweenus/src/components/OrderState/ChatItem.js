import * as React from "react";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";

export default function ChatItem({
    writerNickname,
    contents,
    createdAt,
    writerStatus,
}) {
  return (
    writerStatus ? (
        <li>
          <div className="ly-r">
            <div className="chat-content">
              <div className="bubble">{contents}</div>
              <div className="chat-time">{createdAt[3]}:{createdAt[4]}</div>
            </div>
          </div>
        </li>
      ) : (
        <li>
          <div className="ly-l">
            <div className="user-info">
              <User />
              <div className="nickname">&nbsp;&nbsp;{writerNickname}</div>
            </div>

            <div className="chat-content">
              <div className="bubble">{contents}</div>
              <div className="chat-time">{createdAt[3]}:{createdAt[4]}</div>
            </div>
          </div>
        </li>
      )
  );
}
