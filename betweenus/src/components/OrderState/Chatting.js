import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "../../assets/css/common.css";
import ChatItem from "./ChatItem";
import { GetMessage } from "../../modules/api/chatting/GetMessage";
import client from "../../modules/api/ChatClientInstance";
import { LoginWithToken } from "../../modules/api/chatting/LoginWithToken";
import { GetCurrentUser } from "../../modules/api/common/GetCurrentUserApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import { useInView } from "react-intersection-observer";
import Status from "./Status";

const Chatting = () => {
  const [chatList, _setChatList] = useState([]);
  const [contents, setContents] = useState("");
  const [user, setUser] = useState(null);
  const [hasNext, setHasNext] = useState(false);
  const [lastMessageId, setLastMessageId] = useState();
  const chatListStateRef = useRef(chatList);
  const { orderInfo } = useStoreOrderInfo();
  const scrollRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
  });
  let resp = {};

  const setChatList = (data) => {
    chatListStateRef.current = data;
    _setChatList(data);
  };

  const getList = async (postIdx) => {
    resp = await GetMessage(client, postIdx);
    setChatList(resp.messages);
    setHasNext(resp.hasNext);
    setLastMessageId(resp.messages[resp.messages.length - 1].id);
  };

  const getMoreList = async (postIdx) => {
    console.log(hasNext, lastMessageId);
    if (hasNext) {
      const moreResp = await client.getMessages({
        channelId: String(postIdx),
        lastMessageId: lastMessageId,
        limit: 10,
      });
      setHasNext(moreResp.hasNext);
      setLastMessageId(moreResp.messages[moreResp.messages.length - 1].id);
      setChatList([...chatListStateRef.current, ...moreResp.messages]);
      console.log(chatList);
    }
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
        console.log("plz");
        setChatList([data.message, ...chatListStateRef.current]);
        window.scrollTo({
          top: scrollRef.current.scrollHeight,
          left: 0,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    // if (scrollRef.current) {
    //   window.scrollTo({
    //     top: scrollRef.current.scrollHeight,
    //     left: 0,
    //     behavior: "smooth",
    //   });
    // }
  });

  useEffect(() => {
    if (orderInfo.postIdx) {
      const isLoggedIn = client.isLoggedIn();
      if (!isLoggedIn) {
        LoginAndGetChatList(client, orderInfo.postIdx);
      } else {
        client.on("event", (data) => {
          yourListenerFunc(data);
        });
        getList(orderInfo.postIdx);
      }
      GetCurrentUser().then((r) => {
        setUser(r);
      });
    }
  }, [orderInfo.postIdx]);

  useEffect(() => {
    const isLoggedIn = client.isLoggedIn();
    if (inView && isLoggedIn) {
      getMoreList(orderInfo.postIdx);
    }
  }, [inView]);

  return user ? (
    <section className="chat">
      <div ref={scrollRef} className="wrap">
        <div ref={ref}>TEST</div>
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
