import * as React from "react";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";
import { useState, useEffect } from "react";

export default function ChatItem({
  writerNickname,
  contents,
  createdAt,
  writerStatus,
  user,
}) {
  const [self, setSelf] = useState(false);
  const date = new Date(createdAt);

  useEffect(() => {
    if (writerStatus === String(user)) {
      setSelf(true);
    }
  }, []);
  return self ? (
    <li>
      <div className="ly-r">
        <div className="chat-content">
          <div className="bubble">{contents}</div>
          <div className="chat-time">{createdAt}</div>
          {/* <ChatTimeClock createdAt={createdAt} /> */}
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
          <div className="chat-time">{createdAt}</div>
          {/* <ChatTimeClock createdAt={createdAt} /> */}
        </div>
      </div>
    </li>
  );
}
