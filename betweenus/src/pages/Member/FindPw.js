import * as React from "react";
import "../../assets/css/common.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";

const FindPw = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    birth: "",
    email: "",
    phone: "",
    phonenum: "",
  });

  const { name, birth, email, phone, phonenum } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickButton = () => {
    console.log(inputs);
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
            비밀번호 찾기
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
                placeholder="8자리 숫자 입력"
                name="birth"
                className="inp-frm"
                onChange={onChangeInput}
                value={birth}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">이메일</div>
              <input
                type="text"
                className="inp-frm"
                name="email"
                onChange={onChangeInput}
                value={email}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">휴대폰 번호</div>
              <div className="inp-group">
                <input
                  type="text"
                  placeholder="‘-’ 없이 입력"
                  className="inp-frm"
                  name="phone"
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
                className="inp-frm"
                name="phonenum"
                onChange={onChangeInput}
                value={phonenum}
              />
            </div>
          </div>

          <div className="btn-group-bottom" onClick={onClickButton}>
            <button type="button" className="btn-custom">
              확인
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindPw;
