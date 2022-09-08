import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import { ReactComponent as Profile1 } from "../../assets/img/img_profile1.svg";
import { ReactComponent as Menu1 } from "../../assets/img/ico_menu1_setting.svg";
import { ReactComponent as Menu2 } from "../../assets/img/ico_menu2_setting.svg";
import { ReactComponent as Menu3 } from "../../assets/img/ico_menu3_setting.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NickNameDiv = styled.div`
  padding: 0 0 0 50px;
  font-size: 15px;
  font-weight: 400;
  color: #f87245;
  width: 100%;
  display: flex;
`;

export default function EditProfile() {
  const navigate = useNavigate();
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
            내 정보 수정
          </div>
        </div>
      </header>
      <section className="profile">
        <div className="edit-profile">
          <div className="user-picture">
            <Profile1 />
          </div>
          <div className="user-info">
            <div className="user-nickname">치킨공주</div>
            <div className="user-mail">kwaksj329@naver.com</div>
          </div>
          <NickNameDiv onClick={() => navigate("nickname")}>
            닉네임 변경
          </NickNameDiv>
        </div>
        <ol className="list-setting-menu">
          <li>
            <div onClick={() => navigate("password")}>
              <div className="ico">
                <Menu1 />
              </div>
              <div className="tit">비밀번호 변경</div>
            </div>
          </li>
          <li>
            <a href="/village">
              <div className="ico">
                <Menu2 />
              </div>
              <div className="tit">생년월일</div>
            </a>
          </li>
          <li>
            <a href="/history">
              <div className="ico">
                <Menu3 />
              </div>
              <div className="tit">휴대폰 번호 변경</div>
            </a>
          </li>
        </ol>
        <div>로그아웃</div>
        <div onClick={() => navigate("unregister")}>회원탈퇴</div>
      </section>
    </div>
  );
}
