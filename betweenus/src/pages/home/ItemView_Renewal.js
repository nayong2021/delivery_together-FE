import * as React from "react";
import "../../assets/css/common.css";
import { useNavigate, useParams } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { useEffect, useState, useCallback } from "react";
import { GetGroupBuyingDetailApi } from "../../modules/api/home/GetGroupBuyingDetailApi";
import { ReactComponent as Arrow } from "../../assets/img_renewal/ico_arrow_right1.svg";
import { ReactComponent as Clock } from "../../assets/img_renewal/ico_clock1.svg";
import Picture1 from "../../assets/img_renewal/tmp/img_picture1.png";
import Loading from "../../components/common/Loading";

const ItemView_Renewal = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [groupBuyingDetail, setGroupBuyingDetail] = useState({
    isLoaded: false,
    data: {},
  });
  const timeToOrder = groupBuyingDetail.data.timeToOrder;

  const getList = useCallback(async () => {
    const apiResult = await GetGroupBuyingDetailApi(id);
    setGroupBuyingDetail({
      ...groupBuyingDetail,
      data: apiResult,
      isLoaded: true,
    });
  }, [id]);

  useEffect(() => {
    getList();
  }, [getList]);

  return (
    <>
      <MetaTag />
      <header className="header-v2">
        <div className="hd-v2">
          <button
            type="button"
            className="hd-back"
            onClick={() => navigate(-1)}
          ></button>
          <div className="hd-tit">모집글 상세정보</div>
        </div>
      </header>

      {groupBuyingDetail.isLoaded ? (
        <section className="item-view">
          <div className="fix">
            <div className="top">
              <div className="item-info">
                <div className="time">
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
                <div className="tit">{groupBuyingDetail.data.title}</div>
                <a href="#" className="place">
                  {groupBuyingDetail.data.storeName}
                  <Arrow />
                </a>
              </div>

              <div className="delivery-location">
                <div className="tit">픽업장소</div>
                <div className="txt">
                  <span>{groupBuyingDetail.data.pickupPlace}</span>
                  <button type="button" className="btn-copy"></button>
                </div>
                {/* <a href="#" className="btn-map">
                지도보기
              </a> */}
              </div>
            </div>

            <div className="item-gallery">
              <div className="img-group">
                <img
                  src={groupBuyingDetail.data.backgroundUrl}
                  alt="썸네일"
                  className="thumb"
                />
              </div>

              {/* <div className="gallery-pagination">1/3</div> */}
            </div>
          </div>

          <div className="item-detail">
            <a href="#" className="user-data">
              <div className="user-profile">
                <div className="user-picture">
                  <img
                    src={Picture1}
                    alt="썸네일"
                    className="thumb"
                    // style="background-image: url('../img/tmp/img_picture1.png');"
                  />
                </div>

                <div className="user-info">
                  <div className="user-nickname">
                    {groupBuyingDetail.data.hostNickName}
                  </div>
                  {/* <div className="manner-check">매너나무 확인하기</div> */}
                </div>
              </div>

              {/* <div className="user-manner">
              <div className="manner-point">
                <div className="txt">85.5%</div>
                <div className="bar">
                  <span className="progress" style={{ width: "85.5%" }}></span>
                </div>
              </div>

              <img src={Tree1} alt=" " className="img-manner" />
            </div> */}
            </a>

            <div className="item-desc">
              {groupBuyingDetail.data.additionalInfo}
            </div>
          </div>

          <div className="btn-group-bottom2">
            <div className="price">
              <div className="tit">예상 배달비</div>
              <div className="txt">
                {groupBuyingDetail.data.expectedDeliveryFee}원/
                {groupBuyingDetail.data.currentParticipant
                  ? groupBuyingDetail.data.currentParticipant.toLocaleString()
                  : null}
                명
              </div>
            </div>

            <button
              type="button"
              className="btn-custom-v3"
              onClick={() => navigate(`/itemview/${id.index}/order`)}
            >
              참여하기
            </button>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
};

export default ItemView_Renewal;
