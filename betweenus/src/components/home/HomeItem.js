import * as React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import ItemView from "../../pages/ItemView";

export default function RoomItem({
  index,
  title,
  place,
  time,
  price,
  distance,
}) {
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
        <Route
          path="/itemview/:index"
          render={(props) => (
            <ItemView index={props.match.params.index} {...props} />
          )}
        />
      </Routes>
    </li>
  );
}
