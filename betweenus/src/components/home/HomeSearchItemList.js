import * as React from "react";
import HomeItem from "./HomeItem";
import { useEffect, useState } from "react";
import useStoreDropdownMenu from "../../store/storeDropdownMenu";
import useStoreSearchKeyword from "../../store/storeSearchKeyword";
import { ReactComponent as NoRoomIcon } from "../../assets/img/ico_graphic1.svg";
import { GetSearchLatestOrderApi } from "../../modules/api/home/GetSearchLatestOrderApi";
import { GetSearchLargePeopleApi } from "../../modules/api/home/GetSearchLargePeopleApi";

export default function HomeSearchItemList() {
  const [list, setData] = useState({});
  const { option } = useStoreDropdownMenu();
  const { keyword } = useStoreSearchKeyword();
  let data = {};

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
              distance={item.distance}
              logo={item.storeLogoUrl}
            />
          ))
        ) : (
          <div className="no-data">
            <NoRoomIcon />
            <div className="txt">
              아직 공동구매 모집방이 없어요. <br />
              호스트가 되어 배달 공동구매방을 만들어주세요 :)
            </div>
          </div>
        )}
      </ol>
    </>
  );
}
