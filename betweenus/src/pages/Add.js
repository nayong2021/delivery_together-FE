import * as React from "react";
import MetaTag from "../components/common/MetaTag";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PostGroupBuyingApi } from "../modules/api/PostGroupBuyingApi";
import "rc-time-picker/assets/index.css";
import moment from "moment";
// import MuiTimePicker from "../components/add/MuiTimePicker";

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    timeToOrder: "",
    storeName: "",
    pickupPlace: "",
    detailPickupPlace: "",
    additionalInfo: "",
  });

  const format = "h:mm a";
  const now = moment().hour(0).minute(0);

  function onChange(value) {
    console.log(value && value.format(format));
  }

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

  const onClickButton = () => {
    PostGroupBuyingApi(inputs);
    navigate("/");
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
                주문시간 <br />
                설정
              </div>
              <div className="inp-group-time">
                <input
                  type="text"
                  placeholder="주문시간 설정"
                  className="inp-frm"
                  name="timeToOrder"
                  onChange={onChangeInput}
                  value={timeToOrder}
                />
                {/* <TimePicker
                  showSecond={false}
                  defaultValue={now}
                  className="xxx"
                  onChange={onChange}
                  format={format}
                  use12Hours
                  inputReadOnly
                /> */}
                {/* <MuiTimePicker /> */}
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
                />
                <button type="button" className="btn-frm">
                  주소 찾기
                </button>
              </div>
            </div>

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
