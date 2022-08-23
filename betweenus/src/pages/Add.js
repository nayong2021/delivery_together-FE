import * as React from "react";
import MetaTag from "../components/common/MetaTag";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PostGroupBuyingApi } from "../modules/api/add/PostGroupBuyingApi";
import ScrollTimePicker from "../components/add/ScrollTimePicker";
import useStoreTime from "../store/storeTime";
import DaumPostcode from "react-daum-postcode";

const Add = () => {
  const navigate = useNavigate();
  const { hour, minute } = useStoreTime();

  const [isOpenPost, setIsOpenPost] = useState(false);

  const [inputs, setInputs] = useState({
    title: "",
    timeToOrder: "",
    storeName: "",
    pickupPlace: "",
    detailPickupPlace: "",
    additionalInfo: "",
  });

  const {
    title,
    timeToOrder,
    storeName,
    pickupPlace,
    detailPickupPlace,
    additionalInfo,
  } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickTime = () => {
    setInputs({
      ...inputs,
      timeToOrder: `${hour.length < 2 ? "0" + hour : hour}:${
        minute.length < 2 ? "0" + minute : minute
      }:00`,
    });
  };

  const onClickButton = () => {
    PostGroupBuyingApi(inputs);
    navigate("/");
  };

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    let addr = "";

    if (data.userSelectedType === "R") {
      // 사용자가 도로명 주소를 선택했을 경우
      addr = data.roadAddress;
    } else {
      // 사용자가 지번 주소를 선택했을 경우(J)
      addr = data.jibunAddress;
    }

    setInputs({
      ...inputs,
      pickupPlace: addr,
    });
    setIsOpenPost(false);
  };

  const postCodeStyle = {
    display: "block",
    position: "relative",
    top: "0%",
    width: "400px",
    height: "400px",
    padding: "7px",
  };

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
            모집하기
          </div>
        </div>
      </header>

      <section className="item-write">
        <div className="wrap">
          <div className="frm2">
            <div className="frm-group">
              <input
                type="text"
                placeholder="제목"
                className="inp-frm"
                name="title"
                onChange={onChangeInput}
                value={title}
              />
            </div>

            <div className="frm-group frm-group-time">
              <div className="tit-frm">
                모집 마감 <br />
                시간 설정
              </div>
              <div className="inp-group-time" onClick={onClickTime}>
                {/* <input
                  type="text"
                  placeholder="주문시간 설정"
                  className="inp-frm"
                  name="timeToOrder"
                  onChange={onChangeInput}
                  value={timeToOrder}
                /> */}
                <ScrollTimePicker
                  className="inp-frm"
                  name="timeToOrder"
                  value={timeToOrder}
                />
              </div>
            </div>

            <div className="frm-group">
              <input
                type="text"
                placeholder="가게 이름"
                className="inp-frm"
                name="storeName"
                onChange={onChangeInput}
                value={storeName}
              />
            </div>

            <div className="frm-group">
              <div className="inp-group">
                <input
                  type="text"
                  placeholder="픽업 장소"
                  className="inp-frm"
                  name="pickupPlace"
                  onChange={onChangeInput}
                  value={pickupPlace}
                  disabled={true}
                />
                <button
                  type="button"
                  className="btn-frm"
                  onClick={onChangeOpenPost}
                >
                  주소 찾기
                </button>
              </div>
            </div>
            {isOpenPost ? (
              <div className="frm-group">
                <div className="inp-group">
                  <DaumPostcode
                    style={postCodeStyle}
                    autoClose
                    onComplete={onCompletePost}
                  />
                </div>
              </div>
            ) : null}

            <div className="frm-group">
              <input
                type="text"
                placeholder="상세 픽업 장소"
                className="inp-frm"
                name="detailPickupPlace"
                onChange={onChangeInput}
                value={detailPickupPlace}
              />
            </div>
          </div>

          <div className="add-info">
            <div className="tit">추가정보</div>
            <textarea
              className="txt"
              name="additionalInfo"
              onChange={onChangeInput}
              value={additionalInfo}
            ></textarea>
          </div>

          <div className="btn-group-bottom" onClick={onClickButton}>
            <button type="submit" className="btn-custom">
              모집하기
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Add;
