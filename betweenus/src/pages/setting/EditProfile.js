import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import { ReactComponent as Profile1 } from "../../assets/img/img_profile1.svg";
import { ReactComponent as Menu1 } from "../../assets/img/ico_password.svg";
import { ReactComponent as Menu2 } from "../../assets/img/ico_birth.svg";
import { ReactComponent as Menu3 } from "../../assets/img/ico_phone.svg";
import { useLocation, useNavigate } from "react-router-dom";
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
  const { state } = useLocation();
  const { email, gender, nickName, birth } = state;

  console.log(email, gender, nickName, birth);

  const genderTraslate = () => {
    if (gender === "MALE") return "남성";
    if (gender === "FEMALE") return "여성";
    return "미설정";
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
            <div className="user-nickname">{nickName ? nickName : null}</div>
            <div className="user-mail">{email ? email : null}</div>
          </div>
          <NickNameDiv onClick={() => navigate("nickname")}>
            닉네임 변경
          </NickNameDiv>
        </div>
        <div style={{ height: "10px" }}></div>
        <ol className="list-profile-menu">
          <li>
            <div
              className="list-profile-menu-item"
              onClick={() => navigate("password")}
            >
              <div className="profile-icon">
                <Menu1 />
              </div>
              <div className="tit">비밀번호 변경</div>
            </div>
          </li>
          <li>
            <div className="list-profile-menu-item">
              <div className="profile-icon">
                <Menu2 />
              </div>
              <div className="tit">
                <div className="birth">
                  {birth ? birth[0] + "." + birth[1] + "." + birth[2] : null}
                </div>
              </div>
              <div className="tit">
                <div className="gender">{genderTraslate()}</div>
              </div>
              >>>>>>> 7c67dc511791997446cd969465e1fd0e8fab1e1a
            </div>
          </li>
          <li>
            <div
              className="list-profile-menu-item"
              onClick={() => navigate("phone")}
            >
              <div className="profile-icon">
                <Menu3 />
              </div>
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
