import * as React from "react";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";
import { GetJoinableGroupBuyingApi } from "../../modules/api/home/GetJoinableGroupBuyingApi";
import NoRoomNotice from "./NoRoomNotice";
import useStoreDropdownMenu from "../../store/storeDropdownMenu";
import useStoreSearchKeyword from "../../store/storeSearchKeyword";
import GetSearchLatestOrderApi from "../../modules/api/home/GetSearchLatestOrderApi";
import GetSearchLargePeopleApi from "../../modules/api/home/GetSearchLargePeopleApi";

export default function HomeSearchItemList() {
  const [list, setData] = useState({});
  const { option } = useStoreDropdownMenu();
  const { keyword, setKeyword } = useStoreSearchKeyword();
  let data = {};
  console.log(keyword);

  const getList = async () => {
    if (option === "최신순") {
      console.log(option);
      data = await GetSearchLatestOrderApi(keyword);
      console.log(data);
    } else if (option === "모집인원 많은 순") {
      console.log(option);
      data = await GetSearchLargePeopleApi(keyword);
      console.log(data);
    }
    setData(data);
  };

  useEffect(() => {
    getList();
    console.log("effect");
  }, [option, keyword]);

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
