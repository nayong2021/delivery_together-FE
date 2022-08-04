import * as React from "react";
import "../../assets/css/common.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";

const Join = () => {
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
            회원가입
          </div>
        </div>
      </header>
      <section className="sign">
        <form className="wrap">
          <div className="frm">
            <div className="frm-group">
              <div className="tit-frm">이메일</div>
              <div className="inp-group">
                <input
                  type="text"
                  name="email"
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={email}
                />
                <button type="button" className="btn-frm">
                  인증요청
                </button>
              </div>
            </div>

            <div className="frm-group">
              <div className="tit-frm">이메일 인증번호</div>
              <input
                type="text"
                name="emailnum"
                className="inp-frm"
                onChange={onChangeInput}
                value={emailnum}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">비밀번호</div>
              <input
                type="password"
                name="pw"
                placeholder="영어 대문자와 소문자, 숫자, 특수문자 포함 9~15자"
                className="inp-frm"
                onChange={onChangeInput}
                value={pw}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">비밀번호 확인</div>
              <input
                type="password"
                name="pwconfirm"
                className="inp-frm"
                onChange={onChangeInput}
                value={pwconfirm}
              />
            </div>

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
              <div className="inp-group">
                <input
                  type="text"
                  name="birth"
                  placeholder="8자리 숫자 입력"
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={birth}
                />
                <select name="sex" onChange={onChangeInput} value={sex}>
                  <option value="남자">남자</option>
                  <option value="여자">여자</option>
                </select>
              </div>
            </div>

            <div className="frm-group">
              <div className="tit-frm">닉네임</div>
              <div className="inp-group">
                <input
                  type="text"
                  name="nickname"
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={nickname}
                />
                <button type="button" className="btn-frm">
                  중복확인
                </button>
              </div>
            </div>

            <div className="frm-group">
              <div className="tit-frm">휴대폰 번호</div>
              <div className="inp-group">
                <input
                  type="text"
                  name="phone"
                  placeholder="‘-’ 없이 입력"
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={phone}
                />
                <button type="button" className="btn-frm">
                  중복확인
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

          <div className="btn-group-bottom" onClick={onClickButton}>
            <button type="button" className="btn-custom">
              다음
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Join;
