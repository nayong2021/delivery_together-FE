import * as React from "react";
import "../../assets/css/common.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { GetFindidApi } from "../../modules/api/GetFindidApi";

const FindId = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    phone: "",
    phonenum: "",
  });

  const [guideMS, setGuideMs] = useState("");

  const { name, birth, phone, phonenum } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = async () => {
    const data = await GetFindidApi(inputs.name, inputs.phone, inputs.birth);
    if (data.find) {
      navigate("idresult", { state: data });
    } else {
      setGuideMs("정보와 일치하는 아이디가 없습니다. 다시한번 확인해주세요");
    }
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
          <div className="frm">
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
                  name="phone"
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={phone}
                />
                <button type="button" className="btn-frm">
                  인증요청
                </button>
              </div>
            </div>

            <div className="frm-group">
              <div className="tit-frm">휴대폰 인증번호</div>
              <input
                type="text"
                name="phonenum"
                className="inp-frm"
                onChange={onChangeInput}
                value={phonenum}
              />
            </div>
            <div className="frm-message">{guideMS}</div>
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

export default FindId;
