import * as React from "react";
import data from "../../pages/home.json";
import HomeItem from "./HomeItem";

export default function HomeItemList() {
  const homeitems = data.rooms;
  console.log(homeitems);
  return (
    <>
      <ol className="list-item">
        {homeitems.map((item, idx) => (
          <HomeItem
            key={idx}
            title={item.tit}
            place={item.place}
            time={item.time}
            price={item.price}
            distance={item.distance}
          />
        ))}
      </ol>
    </>
  );
}
