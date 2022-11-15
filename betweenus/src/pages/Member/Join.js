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

  const onClickPhone = () => {
    RequestKakaocert(inputs).then((result) => {
      setInputs({
        ...inputs,
        receiptID: result.receiptID,
      });
    });
  };

  const onClickLogin = async () => {
    console.log(inputs);
    try {
      const result = await PostMemberRegister(inputs);
      result.then((r) => {
        console.log(r);
        sessionStorage.setItem("accessToken", r.data.accessToken);
        sessionStorage.setItem("refreshToken", r.data.refreshToken);
        navigate("/");
      });
    } catch (error) {
      const errorCode = error.response.data.code;
      if (errorCode === 1) {
        console.log("corret");
        navigate("/login");
      } else if (errorCode === "M001") {
        setGuideMS(
          "올바르지 않은 이메일 형식입니다. 입력하신 내용을 다시 확인해주세요."
        );
      } else if (errorCode === "M002") {
        setGuideMS(
          "중복된 이메일이 존재합니다. 입력하신 내용을 다시 확인해주세요."
        );
      } else if (errorCode === "M003") {
        setGuideMS(
          "이메일 인증번호가 일치하지 않습니다. 입력하신 내용을 다시 확인해주세요."
        );
      } else if (errorCode === "M004") {
        setGuideMS(
          "비밀번호 형식이 올바르지 않습니다. 입력하신 내용을 다시 확인해주세요."
        );
      } else if (errorCode === "M005") {
        setGuideMS(
          "비밀번호 확인이 일치하지 않습니다. 입력하신 내용을 다시 확인해주세요."
        );
      } else if (errorCode === "M006") {
        setGuideMS(
          "중복된 닉네임이 존재합니다. 입력하신 내용을 다시 확인해주세요."
        );
      } else if (errorCode === "M007") {
        setGuideMS(
          "전화번호 형식이 올바르지 않습니다. 입력하신 내용을 다시 확인해주세요."
        );
      } else if (errorCode === "K001") {
        setGuideMS(
          "휴대폰 본인인증이 완료되지 않았습니다. 본인인증을 완료해주세요."
        );
      } else if (errorCode === "K002") {
        setGuideMS(
          "휴대폰 본인인증 가능시간이 만료되었습니다. 본인인증을 다시 요청해주세요."
        );
      } else {
        setGuideMS(error.response.data.message);
      }
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
            회원가입
          </div>
        </div>
      </header>
      <section className="sign">
        <form className="wrap">
          <div className="list-frm">
            <li>
              <div className="frm-group">
                <div className="tit-frm">이메일</div>
                <div className="inp-group">
                  <input
                    type="text"
                    name="email"
                    className="inp-frm"
                    placeholder="이메일주소를 입력해주세요."
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
            </li>
            <li>
              <div className="frm-group">
                <div className="tit-frm">이메일 인증번호</div>
                <input
                  type="number"
                  name="authToken"
                  className="inp-frm"
                  onChange={onChangeInput}
                  placeholder="인증번호를 입력해주세요."
                  value={authToken > 0 ? authToken : ""}
                />
              </div>
            </li>

            <li>
              <div className="frm-group">
                <div className="tit-frm">비밀번호</div>
                <input
                  type="password"
                  name="password"
                  placeholder="비밀번호를 입력해주세요."
                  className="inp-frm"
                  onChange={onChangeInput}
                  value={password}
                />
                <div class="inp-message">영어, 숫자, 특수문자 포함 9~ 15자</div>
              </div>
            </li>

            <li>
              <div className="frm-group">
                <div className="tit-frm">비밀번호 확인</div>
                <input
                  type="password"
                  name="passwordVerification"
                  className="inp-frm"
                  placeholder="비밀번호를 입력해주세요."
                  onChange={onChangeInput}
                  value={passwordVerification}
                />
              </div>
            </li>

            <li>
              <div className="frm-group">
                <div className="tit-frm">이름</div>
                <input
                  type="text"
                  name="name"
                  className="inp-frm"
                  onChange={onChangeInput}
                  placeholder="이름을 입력해주세요."
                  value={name}
                />
              </div>
            </li>

            <li>
              <div className="box-frm">
                <div className="frm-group">
                  <div className="tit-frm">생년월일</div>
                  <input
                    type="text"
                    name="birth"
                    placeholder="생년월일을 입력해주세요."
                    className="inp-frm"
                    onChange={onChangeInput}
                    value={birth}
                  />
                  <div className="inp-message">
                    8자리 숫자 입력/예 : 20000928
                  </div>
                </div>

                <div className="frm-group">
                  <div className="tit-frm">성별</div>
                  <select
                    className="select-custom"
                    name="gender"
                    onChange={onChangeInput}
                    value={gender}
                  >
                    <option value="MALE">남자</option>
                    <option value="FEMALE">여자</option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <div className="frm-group">
                <div className="tit-frm">닉네임</div>
                <input
                  type="text"
                  name="nickName"
                  className="inp-frm"
                  placeholder="닉네임을 입력해주세요."
                  onChange={onChangeInput}
                  value={nickName}
                />
                {/* <button type="button" className="btn-frm">
                  중복확인
                </button> */}
              </div>
            </li>
            <li>
              <div className="frm-group">
                <div className="tit-frm">휴대폰 번호</div>
                <div className="inp-group">
                  <input
                    type="text"
                    name="phoneNumber"
                    // placeholder="‘-’ 없이 입력"
                    className="inp-frm"
                    onChange={onChangeInput}
                    placeholder="휴대폰 번호를 ‘-’ 없이 입력해주세요."
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
            </li>

            {/* <div className="frm-group">
              <div className="tit-frm">휴대폰 인증번호</div>
              <input type="text" className="inp-frm" />
            </div> */}

            <div className="frm-message">{guideMS}</div>
          </div>

          <div className="btn-group-bottom2" onClick={onClickLogin}>
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
