import * as React from "react";
import "../../assets/css/common.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { GetFindidApi } from "../../modules/api/member/GetFindidApi";
import Parser from "html-react-parser";
import { RequestKakaocert } from "../../modules/api/member/RequestKakaocert";

const FindId = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    phoneNumber: "",
    receiptID: "",
  });

  const [guideMS, setGuideMs] = useState("");

  const { name, birth, phoneNumber } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = async () => {
    const data = await GetFindidApi(
      inputs.name,
      inputs.phoneNumber,
      inputs.birth,
      inputs.receiptID
    );
    if (data.find) {
      navigate("idresult", { state: data });
    } else {
      setGuideMs(
        "&nbsp;입력하신 정보와 일치하는 아이디가 없습니다.<br/>&nbsp;입력하신 내용을 다시 확인해주세요."
      );
    }
  };

  const onClickPhone = () => {
    RequestKakaocert(inputs).then((result) => {
      setInputs({
        ...inputs,
        receiptID: result.receiptID,
      });
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
            아이디 찾기
          </div>
        </div>
      </header>

      <section className="find">
        <div className="wrap">
          <div className="list-frm">
            <div className="frm-group">
              <div className="tit-frm">이름</div>
              <input
                type="text"
                name="name"
                className="inp-frm"
                onChange={onChangeInput}
                value={name}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">생년월일</div>
              <input
                type="text"
                name="birth"
                placeholder="8자리 숫자 입력"
                className="inp-frm"
                onChange={onChangeInput}
                value={birth}
              />
            </div>

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
            </div>

            {/* <div className="frm-group">
              <div className="tit-frm">휴대폰 인증번호</div>
              <input
                type="text"
                name="phonenum"
                className="inp-frm"
                onChange={onChangeInput}
                value={phonenum}
              />
            </div> */}
            <div className="frm-message" white-space="pre-wrap">
              {Parser(guideMS)}
            </div>
          </div>

          <div className="btn-group-bottom2">
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

export default FindId;
