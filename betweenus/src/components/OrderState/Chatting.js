import * as React from "react";
import { useState, useEffect } from "react";
import "../../assets/css/common.css";
import { SendMessage } from "../../modules/api/chatting/SendMessage";
import ChatItem from "./ChatItem";
import { GetMessage } from "../../modules/api/chatting/GetMessage";
import client from "../../modules/api/ChatClientInstance";
import { LoginWithToken } from "../../modules/api/chatting/LoginWithToken";

const Chatting = () => {
  const [chatList, setChatList] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const [contents, setContents] = useState("");

  const isLoggedIn = client.isLoggedIn();
  if (!isLoggedIn) {
    LoginWithToken(client);
  }

  const getList = async () => {
    const data = await GetMessage(client);
    console.log(data.messages);
    setChatList(data.messages);
    // setResultCount(data.length);
    // console.log(GetMessage());
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
    // const result = await postChatContentsApi(orderInfo.postIdx, contents);
    // if (result) {
    //   getList();
    // }
    SendMessage();
    setContents("");
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <section className="chat">
      <div className="wrap">
        <ol className="list-chat">
          {chatList && Array.isArray(chatList) ? (
            chatList.map((item, idx) => (
              <ChatItem
                key={idx}
                writerNickname={item.username}
                contents={item.text}
                createdAt={item.createdAt}
                writerStatus={item.writerStatus}
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
  );
};

export default Chatting;
