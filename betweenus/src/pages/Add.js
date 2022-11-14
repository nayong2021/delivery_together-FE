import * as React from "react";
import MetaTag from "../components/common/MetaTag";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PostGroupBuyingApi } from "../modules/api/add/PostGroupBuyingApi";
import ScrollTimePicker from "../components/add/ScrollTimePicker";
import useStoreTime from "../store/storeTime";
import DaumPostcode from "react-daum-postcode";
import StoreSelectModal from "../components/add/StoreSelectModal";

const Add = () => {
  const navigate = useNavigate();
  const { hour, minute } = useStoreTime();

  const [openStoreSelect, setOpenStoreSelect] = useState(false);

  const [isOpenPost, setIsOpenPost] = useState(false);

  const [inputs, setInputs] = useState({
    title: "",
    timeToOrder: "",
    pickupPlace: "",
    detailPickupPlace: "",
    additionalInfo: "",
  });

  const [selectedStore, setSelectedStore] = useState({});

  const { title, timeToOrder, pickupPlace, detailPickupPlace, additionalInfo } =
    inputs;

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
    PostGroupBuyingApi(inputs, selectedStore.id);
    navigate("/");
  };

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onClickFindStore = () => {
    setOpenStoreSelect(true);
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
    width: "340px",
    height: "400px",
    padding: "7px",
  };

  return (
    <div id="root">
      <MetaTag />
      <StoreSelectModal
        open={openStoreSelect}
        setOpenStoreSelect={setOpenStoreSelect}
        selectedStore={selectedStore}
        setSelectedStore={setSelectedStore}
      />
      <header class="header">
        <div class="hd">
          <button
            type="button"
            class="hd-back"
            onClick={() => navigate(-1)}
          ></button>
          <div class="hd-tit">모집하기</div>
        </div>
      </header>

      <section className="item-write">
        <div className="wrap">
          <ol class="list-frm">
            <li>
              <div class="frm-group">
                <div class="tit-frm">제목</div>
                <input
                  type="text"
                  placeholder="제목을 입력해주세요."
                  class="inp-frm"
                  name="title"
                  onChange={onChangeInput}
                  value={title}
                />
              </div>
            </li>

            <li>
              <div class="frm-group frm-group-v1">
                <div class="tit-frm">모집 마감 시간</div>
                <div className="inp-group-time" onClick={onClickTime}>
                  <ScrollTimePicker
                    className="inp-frm"
                    name="timeToOrder"
                    value={timeToOrder}
                  />
                </div>
              </div>
            </li>

            <li>
              <div class="frm-group">
                <div class="tit-frm">매장명</div>
                <div class="inp-group">
                  <input
                    type="text"
                    placeholder="매장을 선택해주세요."
                    class="inp-frm"
                    name="storeName"
                    readOnly={true}
                    value={selectedStore.name || ""}
                  />
                  <button
                    type="button"
                    class="btn-frm"
                    onClick={onClickFindStore}
                  >
                    매장 찾기
                  </button>
                </div>
              </div>
            </li>

            <li>
              <div class="frm-group">
                <div class="tit-frm">픽업장소</div>
                <div class="inp-group">
                  <input
                    type="text"
                    placeholder="주소를 검색해주세요."
                    class="inp-frm"
                    name="pickupPlace"
                    onChange={onChangeInput}
                    value={pickupPlace}
                    disabled={true}
                  />
                  <button
                    type="button"
                    class="btn-frm"
                    onClick={onChangeOpenPost}
                  >
                    주소 찾기
                  </button>
                </div>
              </div>
            </li>
            {isOpenPost ? (
              <DaumPostcode
                style={postCodeStyle}
                autoClose
                onComplete={onCompletePost}
              />
            ) : null}

            <li>
              <div class="frm-group">
                <div class="tit-frm">상세 픽업 장소</div>
                <input
                  type="text"
                  placeholder="상세 픽업장소를 입력해주세요."
                  class="inp-frm"
                  name="detailPickupPlace"
                  onChange={onChangeInput}
                  value={detailPickupPlace}
                />
              </div>
            </li>

            <li>
              <div class="frm-group">
                <div class="tit-frm">내용</div>
                <textarea
                  placeholder="내용을 입력해주세요."
                  class="inp-frm"
                  name="additionalInfo"
                  onChange={onChangeInput}
                  value={additionalInfo}
                ></textarea>
              </div>
            </li>
          </ol>

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
