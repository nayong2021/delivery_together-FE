import * as React from "react";
import "../../assets/css/common.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import Parser from "html-react-parser";
import { RequestKakaocertForPhoneUpdate } from "../../modules/api/setting/RequestKakaocertForPhoneUpdate";
import { PostChangePhoneNumber } from "../../modules/api/setting/PostChangePhoneNumber";

const Phone = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [receiptID, setReceiptID] = useState("");
  const [guideMS, setGuideMs] = useState("");

  const onChangeInput = (e) => {
    setPhoneNumber(e.target.value);
  };

  const onClickButton = async () => {
    try {
      await PostChangePhoneNumber(phoneNumber, receiptID);
      navigate(-1);
    } catch (e) {
      setGuideMs(
        "&nbsp;휴대폰 본인인증에 실패했습니다.<br/>&nbsp;다시 시도해주세요."
      );
    }
  };

  const onClickPhone = () => {
    RequestKakaocertForPhoneUpdate(phoneNumber).then((result) => {
      setReceiptID(result.data.receiptID);
    });
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
            휴대폰 번호 변경
          </div>
        </div>
      </header>

      <section className="find">
        <div className="wrap">
          <div className="list-frm">
            <div className="frm-group">
              <div className="tit-frm">휴대폰 번호</div>
              <div className="inp-group">
                <input
                  type="text"
                  placeholder="‘-’ 없이 입력"
                  name="phoneNumber"
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={phoneNumber}
                />
                <button
                  type="button"
                  className="btn-frm"
                  onClick={onClickPhone}
                >
                  인증요청
                </button>
              </div>
              <div className="error-message" white-space="pre-wrap">
                {Parser(guideMS)}
              </div>
            </div>
          </div>

          <div className="btn-group-bottom">
            <button
              type="button"
              className="btn-custom"
              onClick={onClickButton}
            >
              확인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Phone;
