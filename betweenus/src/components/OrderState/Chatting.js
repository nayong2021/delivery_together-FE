import * as React from "react";
import { useState, useEffect } from "react";
import "../../assets/css/common.css";
import { useParams } from "react-router-dom";
import { ReactComponent as User } from "../../assets/img/ico_user1.svg";
import { GetChatList } from "../../modules/api/chatting/GetChatListApi";
import useStoreOrderInfo from "../../store/storeOrderInfo";
import ChatItem from "./ChatItem";

const Chatting = () => {

  const { orderInfo, setOrderInfo } = useStoreOrderInfo();
  const [ chatList, setChatList ] = useState([]);
  const [ resultCount, setResultCount ] = useState(0);

  const getList = async () => {
    const data = await GetChatList(id.index);
    setChatList(data.chatList);
    setResultCount(data.resultCount);
  };

  const id = useParams();

  useEffect(() => {
    getList();
  }, []);

  return (
    <section className="chat">
      <div className="wrap">
        <ol className="list-chat">
          {resultCount > 0 ? (
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
          />
          <button type="button" className="btn-send"></button>
        </div>
      </div>
    </section>
  );
};

export default Chatting;
