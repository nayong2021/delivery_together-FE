import * as React from "react";
import { ReactComponent as Check } from "../../assets/img/check.svg";

const printDistance = (distance) => {
  if (distance < 1) {
    return Math.round(distance * 1000) + "m";
  } else {
    return distance.toFixed(1) + "km";
  }
};

export default function Store({ store, onStoreClick, selected }) {
  return (
    <li onClick={() => onStoreClick(store)}>
      <div className="img-group">
        <img src={store.logo_url} alt="썸네일" className="thumb" />
      </div>

      <div className="store-info">
        <div className="tit">{store.name}</div>
        <div className="additional-info">
          {store.review_count > 0 ? (
            <>
              <div className="rating">{store.review_avg}</div>
              <div className="review-count">
                ({store.review_count.toLocaleString()})
              </div>
            </>
          ) : (
            <div>아직 리뷰가 없는 매장입니다</div>
          )}
          <div className="distance">{printDistance(store.distance)}</div>
          {store.is_available_pickup ? (
            <div className="pickup-available">포장가능</div>
          ) : null}
        </div>
        <div className="delivery-info">
          <div className="delivery-time">{store.estimated_delivery_time}</div>
          <div className="delivery-fee">
            {store.delivery_fee_to_display.basic}
          </div>
        </div>
      </div>
      {selected ? (
        <div className="ck-area">
          <Check />
        </div>
      ) : null}
    </li>
  );
}
