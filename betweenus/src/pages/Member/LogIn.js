import * as React from "react";
import "../../assets/css/common.css";
import { useState, useEffect } from "react";
import MetaTag from "../../components/common/MetaTag";
import { Link } from "react-router-dom";
import Naver from "../../assets/img/ico_naver1.png";
import Kakao from "../../assets/img/ico_kakao1.png";
import Apple from "../../assets/img/ico_apple1.png";

const LogIn = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [correct, setCorret] = useState(true);
  const [WrongMessage, setWrongMessage] = useState("");

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    if (inputId === inputPw) {
      setCorret(false);
      setWrongMessage(
        "이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
      );
    } else {
      setCorret(true);
      document.location.href = "/";
    }
    if (correct) {
    }
  };

  useEffect(() => {
    console.log(inputId);
    console.log(inputPw);
    console.log(correct);
  }, [inputId, inputPw, correct]);

  return (
    <div id="root">
      <MetaTag />
      <section className="login">
        <div className="wrap">
          <div className="top-page">로그인</div>

          <div className="frm-group-login">
            <input
              type="text"
              placeholder="아이디"
              className="inp-frm"
              value={inputId}
              onChange={handleInputId}
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="inp-frm"
              value={inputPw}
              onChange={handleInputPw}
            />
          </div>

          <div className="account-group">
            <Link to="join">회원가입</Link>

            <div className="link-find">
              <Link to="findid">아이디 찾기</Link>
              <Link to="findpw">비밀번호 찾기</Link>
            </div>
          </div>

          <div className="frm-message">{WrongMessage}</div>

          <button type="button" className="btn-custom" onClick={onClickLogin}>
            로그인
          </button>

          <div className="sns-login-group">
            <div className="tit">
              <span>간편 로그인</span>
            </div>

            <ol className="list-sns-login">
              <li>
                <img src={Naver} alt=" " />
              </li>
              <li>
                <img src={Kakao} alt=" " />
              </li>
              <li>
                <img src={Apple} alt=" " />
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;