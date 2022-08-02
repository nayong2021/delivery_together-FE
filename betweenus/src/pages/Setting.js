import * as React from "react";
import "../assets/css/common.css";
import MetaTag from "../components/common/MetaTag";
import BottomNavigation from "../components/common/BottomNavigation";
import { ReactComponent as Profile1 } from "../assets/img/img_profile1.svg";
import { ReactComponent as Menu1 } from "../assets/img/ico_menu1_setting.svg";
import { ReactComponent as Menu2 } from "../assets/img/ico_menu2_setting.svg";
import { ReactComponent as Menu3 } from "../assets/img/ico_menu3_setting.svg";

const Setting = () => {
  return (
    <div id="root">
      <MetaTag />
      <header className="header">
        <div className="hd hd-v1">
          <div className="hd-tit">설정</div>
        </div>
      </header>
      <section className="setting">
        <a href="/privacy" className="user-profile">
          <div className="user-picture">
            <Profile1 />
          </div>
          <div className="user-info">
            <div className="user-nickname">치킨공주</div>
            <div className="user-mail">kwaksj329@naver.com</div>
          </div>
        </a>
        <ol className="list-setting-menu">
          <li>
            <a href="/region">
              <div className="ico">
                <Menu1 />
              </div>
              <div className="tit">동네 설정</div>
            </a>
          </li>
          <li>
            <a href="/village">
              <div className="ico">
                <Menu2 />
              </div>
              <div className="tit">동네 인증</div>
            </a>
          </li>
          <li>
            <a href="/history">
              <div className="ico">
                <Menu3 />
              </div>
              <div className="tit">주문 내역</div>
            </a>
          </li>
        </ol>
      </section>
      <BottomNavigation />
    </div>
  );
};

export default Setting;
