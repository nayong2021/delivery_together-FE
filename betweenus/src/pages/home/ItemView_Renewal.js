import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate, useParams } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { useEffect, useState, useCallback } from "react";
import { GetGroupBuyingDetailApi } from "../../modules/api/home/GetGroupBuyingDetailApi";
import { ReactComponent as Arrow } from "../../assets/img_renewal/ico_arrow_right1.svg";
import { ReactComponent as Clock } from "../../assets/img_renewal/ico_clock1.svg";
import Picture1 from "../../assets/img_renewal/tmp/img_picture1.png";

const ItemView_Renewal = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [groupBuyingDetail, setGroupBuyingDetail] = useState({});
  const timeToOrder = groupBuyingDetail.timeToOrder;

  const getList = useCallback(async () => {
    const apiResult = await GetGroupBuyingDetailApi(id);
    console.log(apiResult);
    setGroupBuyingDetail(apiResult);
  }, [id]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
      <MetaTag />
      <header class="header-v2">
        <div class="hd-v2">
          <button
            type="button"
            class="hd-back"
            onClick={() => navigate(-1)}
          ></button>
          <div class="hd-tit">모집글 상세정보</div>
        </div>
      </header>

      <section class="item-view">
        <div class="fix">
          <div class="top">
            <div class="item-info">
              <div class="time">
                <Clock />
                &nbsp;마감&nbsp;
                {timeToOrder
                  ? (timeToOrder[0] > 12
                      ? timeToOrder[0] - 12
                      : timeToOrder[0]) +
                    ":" +
                    (timeToOrder[1] < 10 ? "0" : "") +
                    timeToOrder[1] +
                    (timeToOrder[0] >= 12 ? "pm" : "am")
                  : null}
              </div>
              <div class="tit">{groupBuyingDetail.title}</div>
              <a href="#" class="place">
                {groupBuyingDetail.storeName}
                <Arrow />
              </a>
            </div>

            <div class="delivery-location">
              <div class="tit">픽업장소</div>
              <div class="txt">
                <span>{groupBuyingDetail.pickupPlace}</span>
                <button type="button" class="btn-copy"></button>
              </div>
              {/* <a href="#" class="btn-map">
                지도보기
              </a> */}
            </div>
          </div>

          <div class="item-gallery">
            <div class="img-group">
              <img
                src={groupBuyingDetail.backgroundUrl}
                alt="썸네일"
                class="thumb"
              />
            </div>

            {/* <div class="gallery-pagination">1/3</div> */}
          </div>
        </div>

        <div class="item-detail">
          <a href="#" class="user-data">
            <div class="user-profile">
              <div class="user-picture">
                <img
                  src={Picture1}
                  alt="썸네일"
                  class="thumb"
                  // style="background-image: url('../img/tmp/img_picture1.png');"
                />
              </div>

              <div class="user-info">
                <div class="user-nickname">
                  {groupBuyingDetail.hostNickName}
                </div>
                {/* <div class="manner-check">매너나무 확인하기</div> */}
              </div>
            </div>

            {/* <div class="user-manner">
              <div class="manner-point">
                <div class="txt">85.5%</div>
                <div class="bar">
                  <span class="progress" style={{ width: "85.5%" }}></span>
                </div>
              </div>

              <img src={Tree1} alt=" " class="img-manner" />
            </div> */}
          </a>

          <div class="item-desc">{groupBuyingDetail.additionalInfo}</div>
        </div>

        <div class="btn-group-bottom2">
          <div class="price">
            <div class="tit">예상 배달비</div>
            <div class="txt">
              {groupBuyingDetail.expectedDeliveryFee}원/
              {groupBuyingDetail.currentParticipant
                ? groupBuyingDetail.currentParticipant.toLocaleString()
                : null}
              명
            </div>
          </div>

          <button
            type="button"
            class="btn-custom-v3"
            onClick={() => navigate(`/itemview/${id.index}/order`)}
          >
            참여하기
          </button>
        </div>
      </section>
    </>
  );
};

export default ItemView_Renewal;
