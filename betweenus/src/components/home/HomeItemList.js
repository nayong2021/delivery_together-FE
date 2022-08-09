import * as React from "react";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";
import { GetJoinableGroupBuyingApi } from "../../modules/api/GetJoinableGroupBuyingApi";
import NoRoomNotice from "./NoRoomNotice";

export default function HomeItemList() {
  const [list, setData] = useState({});

  const getList = async () => {
    const data = await GetJoinableGroupBuyingApi();
    setData(data);
  };
  useEffect(() => {
    getList();
  }, []);

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
