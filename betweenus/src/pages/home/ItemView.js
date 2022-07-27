import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { ReactComponent as Clock } from "../../assets/img/ico_clock1.svg";
import data from "../../pages/home/home.json";

const ItemView = () => {
  const navigate = useNavigate();
  const id = useParams();
  const itemdata = data.rooms[id.index];
  console.log(itemdata);
  return (
    <div className="ItemView">
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
            <div className="tit">{itemdata.tit}</div>
            <div className="group">
              <div className="place">{itemdata.place}</div>
              <div className="time">
                <Clock />
                &nbsp;마감 6:00pm
              </div>
            </div>
          </div>

          <div className="delivery-charge">{itemdata.price}</div>

          <div className="delivery-location">
            상세 픽업 장소: <strong>서울 강남구 테헤란로 311</strong>
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
            <div className="txt">
              BBQ 치킨 먹고 싶은데 배달비 부담스러우신 분들 같이 시켜먹어요!{" "}
              <br />
              <br />
              너무 멀지 않으면 제가 운동할겸 자전거로 한분씩 가져다 드릴게요
              ㅎㅎ <br />
              <br />
              관심 있으신 분들 참여해주세요!!
            </div>
          </div>
          <div className="btn-group-bottom">
            <Link to={`${id.index}/order`}>
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