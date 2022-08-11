import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import { useEffect, useState } from "react";
import { GetGroupBuyingDetailApi } from "../../modules/api/GetGroupBuyingDetailApi";

const ItemView = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [list, setData] = useState([]);

  const getList = async () => {
    const list = await GetGroupBuyingDetailApi(id);
    setData(list);
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div id="root">
      <MetaTag />
      <header className="header">
        <div className="hd">
          <div className="hd-tit">
            <button
              type="button"
              className="hd-back"
              onClick={() => navigate(-1)}
            ></button>
            모집글 상세정보
          </div>
        </div>
      </header>
      <section className="item-view">
        <div className="wrap">
          <div className="item-info">
            <div className="tit">{list.title}</div>
            <div className="group">
              <div className="place">{list.storeName}</div>
              <div className="time">
                <Clock />
                &nbsp;마감 {list.timeToOrder}
              </div>
            </div>
          </div>

          <div className="delivery-charge">
            예상배달비: {list.expectedDeliveryFee} 원 /{" "}
            {list.currentParticipant} 명
          </div>

          <div className="delivery-location">
            상세 픽업 장소: <strong>{list.detailPickupPlace}</strong>
          </div>

          <div className="btn-group-util">
            <button type="button" className="btn btn-custom btn-custom-v2">
              주소복사
            </button>
            <button type="button" className="btn btn-custom btn-custom-v2">
              지도보기
            </button>
          </div>

          <div className="add-info">
            <div className="tit">추가정보</div>
            <div className="txt">{list.additionalInfo}</div>
          </div>
          <div className="btn-group-bottom">
            <Link to={`/itemview/${id.index}/order`}>
              <button type="button" className="btn-custom">
                주문하러 가기
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemView;
