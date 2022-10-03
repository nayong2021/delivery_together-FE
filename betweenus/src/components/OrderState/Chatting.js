import * as React from "react";
import { useState, useEffect, useRef } from "react";
import "../../assets/css/common.css";
import ChatItem from "./ChatItem";
import ChatFileItem from "./ChatFileItem";
import { GetMessage } from "../../modules/api/chatting/GetMessage";
import client from "../../modules/api/ChatClientInstance";
import { LoginWithToken } from "../../modules/api/chatting/LoginWithToken";
import { GetCurrentUser } from "../../modules/api/common/GetCurrentUserApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import { useInView } from "react-intersection-observer";

let firstLoaded = true;

const Chatting = () => {
  const [chatList, _setChatList] = useState([]);
  const [contents, setContents] = useState("");
  const [user, setUser] = useState(null);
  const [hasNext, setHasNext] = useState(false);
  const [lastMessageId, setLastMessageId] = useState();
  const [firstMessageId, setFirstMessageId] = useState();
  const chatListStateRef = useRef(chatList);
  const { orderInfo } = useStoreOrderInfo();
  const scrollRef = useRef();
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const firstMessageRef = useRef(null);
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
    setFirstMessageId(chatList[chatList.length - 1].id);
    if (hasNext) {
      const moreResp = await client.getMessages({
        channelId: String(postIdx),
        lastMessageId: lastMessageId,
        limit: 10,
      });
      setHasNext(moreResp.hasNext);
      setLastMessageId(moreResp.messages[moreResp.messages.length - 1].id);
      setChatList([...chatListStateRef.current, ...moreResp.messages]);
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
    if (firstMessageRef.current) {
      firstMessageRef.current.scrollIntoView();
    }
  }, [firstMessageRef.current]);

  useEffect(() => {
    if (
      scrollRef.current &&
      (document.documentElement.scrollTop > 100 || firstLoaded)
    ) {
      firstLoaded = false;
      window.scrollTo({
        top: scrollRef.current.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [chatList.length]);

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
    return () => {
      client.off("event", yourListenerFunc);
    };
  }, [orderInfo.postIdx]);

  useEffect(() => {
    const isLoggedIn = client.isLoggedIn();
    if (inView && isLoggedIn && hasNext) {
      getMoreList(orderInfo.postIdx);
    }
  }, [inView]);

  const check = () => {
    console.log(document.documentElement.scrollTop);
    console.log(window.innerHeight);
  };

  const onUploadImg = async (event) => {
    console.log(event.target.files[0]);
    const response = await client.sendMessage({
      channelId: String(orderInfo.postIdx),
      type: "text",
      text: "",
      file: event.target.files[0], // 업로드 가능한 최대 파일 사이즈는 15MB입니다.
    });
    console.log(response);
  };

  return user ? (
    <section className="chat">
      <div ref={scrollRef} className="wrap">
        <div ref={ref}></div>
        <ol className="list-chat">
          {chatList && Array.isArray(chatList) ? (
            chatList
              .slice()
              .reverse()
              .map((item, idx) => {
                if (item.id === firstMessageId) {
                  if (item.fileUrl === "") {
                    return (
                      <ChatItem
                        key={item.id}
                        writerNickname={item.username}
                        contents={item.text}
                        createdAt={item.createdAt}
                        writerStatus={item.userId === String(user.memberIdx)}
                        innerRef={firstMessageRef}
                      />
                    );
                  } else {
                    return (
                      <ChatFileItem
                        key={item.id}
                        writerNickname={item.username}
                        createdAt={item.createdAt}
                        writerStatus={item.userId === String(user.memberIdx)}
                        fileurl={item.fileUrl}
                        innerRef={firstMessageRef}
                      ></ChatFileItem>
                    );
                  }
                } else {
                  if (item.fileUrl === "") {
                    return (
                      <ChatItem
                        key={item.id}
                        writerNickname={item.username}
                        contents={item.text}
                        createdAt={item.createdAt}
                        writerStatus={item.userId === String(user.memberIdx)}
                      />
                    );
                  } else {
                    return (
                      <ChatFileItem
                        key={item.id}
                        writerNickname={item.username}
                        createdAt={item.createdAt}
                        writerStatus={item.userId === String(user.memberIdx)}
                        fileurl={item.fileUrl}
                      ></ChatFileItem>
                    );
                  }
                }
              })
          ) : (
            <li></li>
          )}
        </ol>
      </div>

      <div className="inp-group-chat">
        <div className="write-tool">
          <div className="btn-upload">
            <input
              type="file"
              id="upload"
              accept="image/*"
              onChange={onUploadImg}
            />
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
            // onClick={postChatContents}
            onClick={check}
          ></button>
        </div>
      </div>
    </section>
  ) : null;
};

export default Chatting;
