import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import { ReactComponent as Profile1 } from "../../assets/img/img_profile1.svg";
import { ReactComponent as Menu1 } from "../../assets/img/ico_password.svg";
import { ReactComponent as Menu2 } from "../../assets/img/ico_birth.svg";
import { ReactComponent as Menu3 } from "../../assets/img/ico_phone.svg";
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
      <section className="profile" style={{ backgroundColor: "#f2f2f2" }}>
        <div className="edit-profile" style={{ backgroundColor: "#ffff" }}>
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
        <div style={{ height: "10px" }}></div>
        <ol className="list-profile-menu" style={{ backgroundColor: "#ffff" }}>
          <li style={{ padding: "20px 0 20px 0" }}>
            <div
              onClick={() => navigate("password")}
              style={{ display: "flex" }}
            >
              <Menu1 style={{ padding: "0 15px 0 10px" }} />
              <div className="tit">비밀번호 변경</div>
            </div>
          </li>
          <li style={{ padding: "20px 0 20px 0" }}>
            <div style={{ display: "flex" }}>
              <Menu2 style={{ padding: "0 15px 0 10px" }} />
              <div className="tit">생년월일</div>
              <div className="tit">&nbsp;성별</div>
            </div>
          </li>
          <li style={{ padding: "20px 0 20px 0" }}>
            <div onClick={() => navigate("phone")} style={{ display: "flex" }}>
              <Menu3 style={{ padding: "0 15px 0 10px" }} />
              <div className="tit">휴대폰 번호 변경</div>
            </div>
          </li>
        </ol>
        <div
          style={{ float: "right", display: "flex", padding: "15px 15px 0 0" }}
        >
          <div style={{ fontSize: "13px" }}>로그아웃</div>
          <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
          <div
            style={{ fontSize: "13px" }}
            onClick={() => navigate("unregister")}
          >
            회원탈퇴
          </div>
        </div>
      </section>
    </div>
  );
}
