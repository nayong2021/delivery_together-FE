import * as React from "react";
import "../../assets/css/common.css";
import { useState, useEffect } from "react";
import MetaTag from "../../components/common/MetaTag";
import { Link } from "react-router-dom";
import Naver from "../../assets/img/ico_naver1.png";
import Kakao from "../../assets/img/ico_kakao1.png";
import Apple from "../../assets/img/ico_apple1.png";
import { PostLoginApi } from "../../modules/api/member/PostLoginApi";
import Parser from "html-react-parser";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [WrongMessage, setWrongMessage] = useState("");
  const navigate = useNavigate();

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    const result = PostLoginApi({
      email: inputId,
      password: inputPw,
    });
    result.then((r) => {
      if (r.data) {
        sessionStorage.setItem("accessToken", r.data.accessToken);
        sessionStorage.setItem("refreshToken", r.data.refreshToken);
        navigate("/");
      } else {
        setWrongMessage(
          "&nbsp;&nbsp;&nbsp;이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
        );
      }
    });
  };

  useEffect(() => {}, [inputId, inputPw]);

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
            <Link to="/login/join">회원가입</Link>

            <div className="link-find">
              <Link to="findid">아이디 찾기</Link>
              <Link to="findpw">비밀번호 찾기</Link>
            </div>
          </div>

          <div className="frm-message">{Parser(WrongMessage)}</div>

          <button type="button" className="btn-custom" onClick={onClickLogin}>
            로그인
          </button>

          <div className="sns-login-group">
            <div className="tit">
              <span>간편 로그인</span>
            </div>

            <ol className="list-sns-login">
              <li>
                <a href="https://nid.naver.com/oauth2.0/authorize?response_type=code&state=STATE_STRING&client_id=vvHUq0qX9AXLBnrSIAsO&redirect_uri=https://www.deliverytogether.com/login/oauth2/code/naver">
                  <img src={Naver} alt=" " />
                </a>
              </li>
              <li>
                <a href="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=04949a28db4e3308b9043cc740782305&redirect_uri=https://www.deliverytogether.com/login/oauth2/code/kakao">
                  <img src={Kakao} alt=" " />
                </a>
              </li>
              <li>
                <a href="https://appleid.apple.com/auth/authorize?client_id=com.deliverytogether.lesserpanda&redirect_uri=https://api.deliverytogether.com/login/oauth_apple&response_type=code%20id_token&scope=name%20email&response_mode=form_post&frame_id=c7de876d-a09f-49e4-a54f-a865ecf99b96&m=12&v=1.5.4">
                  <img src={Apple} alt=" " />
                </a>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LogIn;
