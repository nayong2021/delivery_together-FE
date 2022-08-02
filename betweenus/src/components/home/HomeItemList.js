import * as React from "react";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";
import { GetJoinableGroupBuyingApi } from "../../modules/api/GetJoinableGroupBuyingApi";

export default function HomeItemList() {
  const [list, setData] = useState([]);

  const getList = async () => {
    const list = await GetJoinableGroupBuyingApi();
    setData(list);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <ol className="list-item">
        {list.map((item, idx) => (
          <HomeItem
            key={idx}
            index={item.postIdx}
            title={item.title}
            place={item.storeName}
            time={item.timeToOrder}
            price="4000원"
            participant={item.currentParticipant}
            distance={item.timeToOrder}
          />
        ))}
      </ol>
    </>
  );
}
