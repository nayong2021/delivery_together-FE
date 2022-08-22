import * as React from "react";
import { useState, useEffect } from "react";
import "../../assets/css/common.css";
import { GetChatList } from "../../modules/api/chatting/GetChatListApi";
import { postChatContentsApi } from "../../modules/api/orderstate/PostChatContentsApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import ChatItem from "./ChatItem";

const Chatting = () => {

  const { orderInfo } = useStoreOrderInfo();
  const [ chatList, setChatList ] = useState([]);
  const [ resultCount, setResultCount ] = useState(0);
  const [ contents, setContents ] = useState("");

  const getList = async () => {
    const data = await GetChatList(orderInfo.postIdx);
    setChatList(data.chatList);
    setResultCount(data.resultCount);
  };

  const handleContents = (e) => {
    setContents(e.target.value);
  };

  const onKeyPress = async (e) => {
    if (e.key === "Enter") {
      postChatContents();
    }
  };

  const postChatContents = async() => {
    const result = await postChatContentsApi(orderInfo.postIdx, contents);
    if(result) {
      getList();
    }
    setContents("");
  }

  useEffect(() => {
    getList();
  }, [resultCount]);

  return (
    <section className="chat">
      <div className="wrap">
        <ol className="list-chat">
          {chatList && Array.isArray(chatList) ? (
            chatList.map((item, idx) => (
              <ChatItem
              key={idx}
              writerNickname={item.writerNickname}
              contents={item.contents}
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
          <button type="button" 
          className="btn-send"
          onClick={postChatContents}></button>
        </div>
      </div>
    </section>
  );
};

export default Chatting;
