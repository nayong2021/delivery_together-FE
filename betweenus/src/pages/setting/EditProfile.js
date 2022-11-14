import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import { ReactComponent as Profile1 } from "../../assets/img/img_profile1.svg";
import { ReactComponent as Menu1 } from "../../assets/img/ico_password.svg";
import { ReactComponent as Menu2 } from "../../assets/img/ico_birth.svg";
import { ReactComponent as Menu3 } from "../../assets/img/ico_phone.svg";
import { useLocation, useNavigate } from "react-router-dom";

export default function EditProfile() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { email, gender, nickName, birth } = state;

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
              onClick={() => navigate("/setting")}
            ></button>
            내 정보 수정
          </div>
        </div>
      </header>
      <section className="setting">
        <div className="wrap">
          <div className="user-profile" style={{ marginBottom: "20px" }}>
            <div className="user-picture">
              <Profile1 width={"100%"} height={"100%"} />
            </div>
            <div className="user-info">
              <div className="user-nickname">{nickName ? nickName : null}</div>
              <div className="user-mail">{email ? email : null}</div>
            </div>
            <div
              className="change-nickname"
              onClick={() => navigate("nickname")}
            >
              닉네임 변경
            </div>
          </div>
        </div>

        <div style={{ height: "10px", backgroundColor: "#f2f2f2" }} />
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
        <div style={{ height: "10px", backgroundColor: "#f2f2f2" }} />
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
