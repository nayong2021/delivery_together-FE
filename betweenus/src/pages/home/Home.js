import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import DrowpdownMenuHeader from "../../components/home/DropdownMenuHeader";
import BottomNavigation from "../../components/common/BottomNavigation";
import { ReactComponent as ShortCut } from "../../assets/img/ico_shortcut1.svg";
import HomeItemList from "../../components/home/HomeItemList";

const Home = () => {
  return (
    <div id="root">
      <MetaTag />
      <DrowpdownMenuHeader />
      <section className="main">
        <div className="wrap">
          <HomeItemList />
        </div>
      </section>
      <BottomNavigation />
    </div>
  );
};

export default Home;
