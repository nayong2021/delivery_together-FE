import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ItemView from "../../pages/home/ItemView";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";

export default function RoomItem({
  index,
  title,
  place,
  time,
  price,
  distance,
}) {
  console.log(index);
  return (
    <li className="list-item">
      <Link to={`/itemview/${index}`}>
        <div className="tit">{title}</div>
        <div className="place">{place}</div>
        <div className="info-group">
          <div className="time">
            <Clock />
            &nbsp;{time}
          </div>
          <div className="info">
            <span className="price">{price}</span>
            <span className="distance">{distance}</span>
          </div>
        </div>
      </Link>
      <Routes>
        <Route exact path="/:index" element={<ItemView index={index} />} />
      </Routes>
    </li>
  );
}
