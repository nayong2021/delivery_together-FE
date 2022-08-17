import * as React from "react";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";
import NoRoomNotice from "./NoRoomNotice";
import useStoreDropdownMenu from "../../store/storeDropdownMenu";
import { GetOrderOfLargePeopleApi } from "../../modules/api/home/GetOrderOfLargePeopleApi";

export default function HomeItemList() {
  const [list, setData] = useState({});
  const { option } = useStoreDropdownMenu();
  let data = {};

  const getList = async () => {
    if (!option || option === "최신순") {
      data = await GetJoinableGroupBuyingApi();
    } else if (option === "모집인원 많은 순") {
      data = await GetOrderOfLargePeopleApi();
    }
    setData(data);
  };

  useEffect(() => {
    getList();
  }, [list]);

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
