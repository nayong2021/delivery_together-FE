import * as React from "react";
import "../../assets/css/common.css";
import { useState, useEffect } from "react";
import MetaTag from "../../components/common/MetaTag";
import BottomNavigation from "../../components/common/BottomNavigation";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Profile1 } from "../../assets/img/img_profile1.svg";
import { ReactComponent as Menu1 } from "../../assets/img/ico_menu1_setting.svg";
import { ReactComponent as Menu2 } from "../../assets/img/user-gathering-01.svg";
import { ReactComponent as Menu3 } from "../../assets/img/user-participate-01.svg";
import { ReactComponent as Arrow } from "../../assets/img_renewal/ico_arrow_right1.svg";
import Character from "../../assets/img/img_3d.png";
import { GetCurrentUserApi } from "../../modules/api/member/GetCurrentUserApi";

const Setting = () => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const { email, gender, nickName, birth } = currentUser;

  const getUserInfo = async () => {
    const apiResult = await GetCurrentUserApi();
    setCurrentUser(apiResult);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div id="root">
      <MetaTag />
      <header className="header">
        <div className="hd">
          <div className="hd-tit">설정</div>
        </div>
      </header>
      <section className="setting">
        <div className="wrap">
          <div
            className="user-profile"
            onClick={() =>
              navigate("/setting/profile", {
                state: {
                  email: email,
                  gender: gender,
                  nickName: nickName,
                  birth: birth,
                },
              })
            }
          >
            <div className="user-picture">
              <Profile1 width={"100%"} height={"100%"} />
            </div>
            <div className="user-info">
              <div className="user-nickname">{nickName ? nickName : null}</div>
              <div className="user-mail">{email ? email : null}</div>
            </div>
            <Arrow style={{ margin: "0 0 0 auto" }} />
          </div>
        </div>

        <ol className="list-setting-menu">
          <li>
            <div onClick={() => navigate("/setting/region")}>
              <div className="ico">
                <Menu1 />
              </div>
              <div className="tit">동네 설정</div>
            </div>
          </li>
          <li>
            <div>
              <div className="ico">
                <Menu2 />
              </div>
              <div className="tit">동네 인증</div>
            </div>
          </li>
          <li>
            <div onClick={() => navigate("orderhistory")}>
              <div className="ico">
                <Menu3 />
              </div>
              <div className="tit">참여 내역</div>
            </div>
          </li>
        </ol>
        <img
          src={Character}
          alt=" "
          width={"90%"}
          style={{ position: "absolute", bottom: 70, right: 0 }}
        />
      </section>

      <BottomNavigation />
    </div>
  );
};

export default Setting;
