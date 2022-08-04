import * as React from "react";
import "../../assets/css/common.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";

const FindId = () => {
  const navigate = useNavigate();
  const [guideMS, setGuideMS] = useState(
    "인증번호가 일치하지 않습니다. 확인 후 다시 입력해주세요."
  );
  const [inputs, setInputs] = useState({
    email: "",
    emailnum: "",
    pw: "",
    pwconfirm: "",
    name: "",
    birth: "",
    sex: "",
    nickname: "",
    phone: "",
    phonenum: "",
  });

  const {
    email,
    emailnum,
    pw,
    pwconfirm,
    name,
    birth,
    sex,
    nickname,
    phone,
    phonenum,
  } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = () => {
    console.log(inputs);
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
              <input type="text" className="inp-frm" />
            </div>

            <div className="frm-group">
              <div className="tit-frm">생년월일</div>
              <input
                type="text"
                placeholder="8자리 숫자 입력"
                className="inp-frm"
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">휴대폰 번호</div>
              <div className="inp-group">
                <input
                  type="text"
                  placeholder="‘-’ 없이 입력"
                  className="inp-frm"
                />
                <button type="button" className="btn-frm">
                  인증요청
                </button>
              </div>
            </div>

            <div className="frm-group">
              <div className="tit-frm">휴대폰 인증번호</div>
              <input type="text" className="inp-frm" />
            </div>
          </div>

          <div className="btn-group-bottom">
            <button type="button" className="btn-custom">
              확인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindId;
