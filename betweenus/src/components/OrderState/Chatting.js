import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "../../assets/css/common.css";
import { SendMessage } from "../../modules/api/chatting/SendMessage";
import ChatItem from "./ChatItem";
import { GetMessage } from "../../modules/api/chatting/GetMessage";
import client from "../../modules/api/ChatClientInstance";
import { LoginWithToken } from "../../modules/api/chatting/LoginWithToken";
import { GetCurrentUser } from "../../modules/api/common/GetCurrentUserApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";

const Chatting = () => {
  const [chatList, _setChatList] = useState([]);
  const [contents, setContents] = useState("");
  const [user, setUser] = useState(null);
  const chatListStateRef = useRef(chatList);
  const { orderInfo } = useStoreOrderInfo();
  const scrollRef = useRef();

  const setChatList = (data) => {
    chatListStateRef.current = data;
    _setChatList(data);
  };

  const getList = async (postIdx) => {
    const data = await GetMessage(client, postIdx);
    setChatList(data.messages);
    console.log(data);
  };

  const handleContents = (e) => {
    setContents(e.target.value);
  };

  const onKeyPress = async (e) => {
    if (e.key === "Enter") {
      postChatContents();
    }
  };

  const postChatContents = async () => {
    await client.sendMessage(
      {
        channelId: String(orderInfo.postIdx),
        type: "text",
        text: contents,
      },
      function (err, data) {
        console.log(data.message);
        setChatList([data.message, ...chatListStateRef.current]);
      }
    );
    setContents("");
  };

  const LoginAndGetChatList = async (client, postIdx) => {
    await LoginWithToken(client);
    client.on("event", (data) => {
      yourListenerFunc(data);
    });
    getList(postIdx);
  };

  const yourListenerFunc = (data) => {
    if (data.type === "message") {
      if (data.message.channelId === String(orderInfo.postIdx)) {
        setChatList([data.message, ...chatListStateRef.current]);
      }
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      window.scrollTo({
        top: scrollRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
      // console.log(scrollRef.current.scrollTop)
    }
  });

  useEffect(() => {
    if (orderInfo.postIdx) {
      const isLoggedIn = client.isLoggedIn();
      if (!isLoggedIn) {
        LoginAndGetChatList(client, orderInfo.postIdx);
      } else {
        getList(orderInfo.postIdx);
      }
      GetCurrentUser().then((r) => {
        setUser(r);
      });
      console.log(orderInfo);
    }
  }, [orderInfo.postIdx]);

  return user ? (
    <section className="chat">
      <div ref={scrollRef} className="wrap">
        <ol className="list-chat">
          {chatList && Array.isArray(chatList) ? (
            chatList
              .slice()
              .reverse()
              .map((item, idx) => (
                <ChatItem
                  key={idx}
                  writerNickname={item.username}
                  contents={item.text}
                  createdAt={item.createdAt}
                  writerStatus={item.userId}
                  user={user.memberIdx}
                />
              ))
          ) : (
            <li></li>
          )}
        </ol>
      </div>

      <div className="inp-group-chat">
        <div className="write-tool">
          <div className="btn-upload">
            <input type="file" id="upload" />
            <label htmlFor="upload"></label>
          </div>
          <input
            type="text"
            placeholder="메세지를 입력하세요."
            className="inp-chat"
            onChange={handleContents}
            value={contents}
            onKeyPress={onKeyPress}
          />
          <button
            type="button"
            className="btn-send"
            onClick={postChatContents}
          ></button>
        </div>
      </div>
    </section>
  ) : null;
};

export default Chatting;
