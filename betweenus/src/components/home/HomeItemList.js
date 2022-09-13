import * as React from "react";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";
import NoRoomNotice from "./NoRoomNotice";
import useStoreDropdownMenu from "../../store/storeDropdownMenu";
import { GetOrderOfLargePeopleApi } from "../../modules/api/home/GetOrderOfLargePeopleApi";
// import useStoreChatClient from "../../store/storeChatClient";
import client from "../../modules/api/ChatClientInstance";

export default function HomeItemList() {
  const [list, setData] = useState({});
  const { option } = useStoreDropdownMenu();

  let data = {};

  const getList = async () => {
    // console.log(option);
    if (option === "최신순") {
      // console.log(option);
      data = await GetJoinableGroupBuyingApi();
      // console.log(data);
    } else if (option === "모집인원 많은 순") {
      // console.log(option);
      data = await GetOrderOfLargePeopleApi();
      // console.log(data);
    }
    setData(data);
  };

  const talkPlusLogin = async (client) => {
    return await client.loginWithToken({
      userId: "84", // unique userId
      username: "나는수정이다", // username
      loginToken:
        "$2a$06$EGkgrThfCWTmnjbk24Bq/.sMUuAxp2g73oHmNgCEGr0ozp6CtpBzi",
      profileImageUrl: "",
      data: {},
    });
  };

  useEffect(() => {
    getList();
    talkPlusLogin(client).then((result) => {
      console.log(result);
    });
  }, [option]);

  return (
    <>
      <ol className="list-item">
        {list.resultCount > 0 ? (
          list.groupBuyingPostList.map((item, idx) => (
            <HomeItem
              key={idx}
              index={item.postIdx}
              title={item.title}
              place={item.storeName}
              time={item.timeToOrder}
              price={item.expectedDeliveryFee}
              participant={item.currentParticipant}
              distance={item.timeToOrder}
            />
          ))
        ) : (
          <NoRoomNotice />
        )}
      </ol>
    </>
  );
}
