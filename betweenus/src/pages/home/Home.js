import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import DrowpdownMenuHeader from "../../components/home/DropdownMenuHeader";
import BottomNavigation from "../../components/common/BottomNavigation";
import { ReactComponent as ShortCut } from "../../assets/img/ico_shortcut1.svg";
import HomeItemList from "../../components/home/HomeItemList";

const Home = () => {
  return (
    <div className="Home">
      <MetaTag />
      <DrowpdownMenuHeader />
      <section className="main">
        <div className="wrap">
          <a href="#!" className="bnr-main">
            <div className="txt-group">
              <div className="txt">배달 공동구매를 시작해보세요!</div>
              <div className="txt2">
                지금 동네인증을 하고 근처 이웃들과 <br />
                함께 배달음식을 주문하세요.
              </div>
            </div>
            <ShortCut />
          </a>
          <HomeItemList />
        </div>
      </section>
      <BottomNavigation home={"active"} />
    </div>
  );
};

export default Home;
