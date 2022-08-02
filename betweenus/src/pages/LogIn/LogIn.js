import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import Naver from "../../assets/img/ico_naver1.png";
import Kakao from "../../assets/img/ico_kakao1.png";
import Apple from "../../assets/img/ico_apple1.png";

const LogIn = () => {
  return (
    <div id="root">
      <MetaTag />
      <section class="login">
        <div class="wrap">
          <div class="top-page">로그인</div>

          <div class="frm-group-login">
            <input type="text" placeholder="아이디" class="inp-frm" />
            <input type="password" placeholder="비밀번호" class="inp-frm" />
          </div>

          <div class="account-group">
            <a href="sign.html">회원가입</a>

            <div class="link-find">
              <a href="find-id.html">아이디 찾기</a>
              <a href="find-pw.html">비밀번호 찾기</a>
            </div>
          </div>

          <div class="frm-message">
            이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시
            확인해주세요.
          </div>

          <button
            type="button"
            class="btn-custom"
            onclick="location.href='../index.html'"
          >
            로그인
          </button>

          <div class="sns-login-group">
            <div class="tit">
              <span>간편 로그인</span>
            </div>

            <ol class="list-sns-login">
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
