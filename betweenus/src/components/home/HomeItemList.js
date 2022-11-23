import * as React from "react";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";
import NoRoomNotice from "./NoRoomNotice";
import useStoreDropdownMenu from "../../store/storeDropdownMenu";
import { GetOrderOfLargePeopleApi } from "../../modules/api/home/GetOrderOfLargePeopleApi";
// import useStoreChatClient from "../../store/storeChatClient";
import client from "../../modules/api/ChatClientInstance";
import { GetNearestGroupBuyingApi } from "../../modules/api/home/GetNearestGroupBuyingApi";
import Loading from "../common/Loading";

export default function HomeItemList() {
  const [list, setList] = useState({ isLoaded: false, posts: [] });
  const { option } = useStoreDropdownMenu();

  let data = {};

  const getList = async () => {
    // console.log(option);
    if (option === "최신순") {
      data = await GetJoinableGroupBuyingApi();
    } else if (option === "모집인원 많은 순") {
      data = await GetOrderOfLargePeopleApi();
    } else if (option === "가까운 순") {
      data = await GetNearestGroupBuyingApi();
    }
    setList({ ...list, posts: data, isLoaded: true });
  };

  useEffect(() => {
    getList();
  }, [option]);

  return (
    <>
      {!list.isLoaded ? (
        <Loading />
      ) : (
        <ol className="list-item">
          {list.posts.length > 0 ? (
            list.posts.map((item, idx) => (
              <HomeItem
                key={idx}
                index={item.postIdx}
                title={item.title}
                place={item.storeName}
                time={item.timeToOrder}
                price={item.expectedDeliveryFee}
                participant={item.currentParticipant}
                distance={item.distance}
                logo={item.storeLogoUrl}
              />
            ))
          ) : (
            <NoRoomNotice />
          )}
        </ol>
      )}
    </>
  );
}
