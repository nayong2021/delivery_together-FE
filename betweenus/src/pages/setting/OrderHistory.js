import * as React from "react";
import OrderHistoryItem from "../../components/settings/OrderHistoryItem";
import { useEffect, useState } from "react";
import NoRoomNotice from "../../components/home/NoRoomNotice";
import { GetOrderHistoryApi } from "../../modules/api/setting/GetOrderHistoryApi";
import { useNavigate } from "react-router-dom";

export default function OrderHistory() {
  const [list, setData] = useState({});
  const navigate = useNavigate();
  let data = {};

  const getList = async () => {
    data = await GetOrderHistoryApi();
    setData(data);
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
      <header className="header-v2">
        <div className="hd-v2">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            주문 내역
          </div>
        </div>
      </header>
      <section className="main">
        <div className="wrap">
          <ol className="list-item">
            {list.resultCount > 0 ? (
              list.orderHistoryList.map((item, idx) => (
                <OrderHistoryItem
                  key={idx}
                  index={item.postIdx}
                  title={item.title}
                  place={item.storeName}
                  time={item.createdAt}
                  price={item.orderAmount}
                  host={item.host}
                  logo={item.storeLogoUrl}
                />
              ))
            ) : (
              <NoRoomNotice />
            )}
          </ol>
        </div>
      </section>
    </>
  );
}
