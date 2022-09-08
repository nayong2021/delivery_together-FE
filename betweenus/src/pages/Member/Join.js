import * as React from "react";
import "../../assets/css/common.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaTag from "../../components/common/MetaTag";
import { GetSendEmailTokenApi } from "../../modules/api/member/GetSendEmailTokenApi";
import { PostMemberRegister } from "../../modules/api/member/PostMemberRegisterApi";
import { RequestKakaocert } from "../../modules/api/member/RequestKakaocert";

const Join = () => {
  const navigate = useNavigate();
  const [guideMS, setGuideMS] = useState("");
  const [inputs, setInputs] = useState({
    email: "",
    authToken: 0,
    password: "",
    passwordVerification: "",
    name: "",
    birth: "",
    gender: "MALE",
    nickName: "",
    phoneNumber: "",
    receiptID: "",
  });

  const {
    email,
    authToken,
    password,
    passwordVerification,
    name,
    birth,
    gender,
    nickName,
    phoneNumber,
  } = inputs;

  const onChangeInput = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const onClickEmail = () => {
    GetSendEmailTokenApi(inputs.email);
  };

  /*
  1: 회원가입 성공
  2: 올바르지 않은 이메일 형식
  3: 비밀번호 형식 올바르지 않음
  4: 중복된 닉네임
  5: 전화번호 형식 올바르지 않음
  6: 비밀번호 확인 일치하지 않음
  7: 잘못된 인증번호 
  */

  const onClickPhone = () => {
    RequestKakaocert(inputs).then(result => {
      setInputs({
        ...inputs,
        receiptID: result.receiptID,
      });
    });
  };

  const onClickLogin = () => {
    console.log(inputs);
    const result = PostMemberRegister(inputs);
    result.then((r) => {
      if (r.data === 1) {
        console.log("corret");
        navigate("/login");
      } else if (r.data === 2) {
        setGuideMS(
          "올바르지 않은 이메일 형식입니다. 입력하신 내용을 다시 확인해주세요."
        );
        console.log(r.data);
        console.log(inputs);
      } else if (r.data === 3) {
        setGuideMS(
          "중복된 이메일이 존재합니다. 입력하신 내용을 다시 확인해주세요."
        );
        console.log(r.data);
        console.log(inputs);
      } else if (r.data === 4) {
        setGuideMS(
          "이메일 인증번호가 일치하지 않습니다. 입력하신 내용을 다시 확인해주세요."
        );
        console.log(r.data);
        console.log(inputs);
      } else if (r.data === 5) {
        setGuideMS(
          "비밀번호 형식이 올바르지 않습니다. 입력하신 내용을 다시 확인해주세요."
        );
        console.log(r.data);
        console.log(inputs);
      } else if (r.data === 6) {
        setGuideMS(
          "비밀번호 확인이 일치하지 않습니다. 입력하신 내용을 다시 확인해주세요."
        );
        console.log(r.data);
        console.log(inputs);
      } else if (r.data === 7) {
        setGuideMS(
          "중복된 닉네임이 존재합니다. 입력하신 내용을 다시 확인해주세요."
        );
        console.log(r.data);
        console.log(inputs);
      } else if (r.data === 8) {
        setGuideMS(
          "전화번호 형식이 올바르지 않습니다. 입력하신 내용을 다시 확인해주세요."
        );
        console.log(r.data);
        console.log(inputs);
      }
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
                <button
                  type="button"
                  className="btn-frm"
                  onClick={onClickEmail}
                >
                  인증요청
                </button>
              </div>
            </div>

            <div className="frm-group">
              <div className="tit-frm">이메일 인증번호</div>
              <input
                type="number"
                name="authToken"
                className="inp-frm"
                onChange={onChangeInput}
                value={authToken > 0 ? authToken : ""}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">비밀번호</div>
              <input
                type="password"
                name="password"
                placeholder="영어 대문자와 소문자, 숫자, 특수문자 포함 9~15자"
                className="inp-frm"
                onChange={onChangeInput}
                value={password}
              />
            </div>

            <div className="frm-group">
              <div className="tit-frm">비밀번호 확인</div>
              <input
                type="password"
                name="passwordVerification"
                className="inp-frm"
                onChange={onChangeInput}
                value={passwordVerification}
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
                <select name="gender" onChange={onChangeInput} value={gender}>
                  <option value="MALE">남자</option>
                  <option value="FEMALE">여자</option>
                </select>
              </div>
            </div>

            <div className="frm-group">
              <div className="tit-frm">닉네임</div>
              <input
                type="text"
                name="nickName"
                className="inp-frm"
                onChange={onChangeInput}
                value={nickName}
              />
              {/* <button type="button" className="btn-frm">
                  중복확인
                </button> */}
            </div>

            <div className="frm-group">
              <div className="tit-frm">휴대폰 번호</div>
              <div className="inp-group">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="‘-’ 없이 입력"
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={phoneNumber}
                />
                <button type="button" className="btn-frm" onClick={onClickPhone}>
                  인증요청
                </button>
              </div>
            </div>

            {/* <div className="frm-group">
              <div className="tit-frm">휴대폰 인증번호</div>
              <input type="text" className="inp-frm" />
            </div> */}

            <div className="frm-message">{guideMS}</div>
          </div>

          <div className="btn-group-bottom" onClick={onClickLogin}>
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
