import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import DrowpdownMenuHeader from "../../components/home/DropdownMenuHeader";
import BottomNavigation from "../../components/common/BottomNavigation";
import HomeItemList from "../../components/home/HomeItemList";
import client from "../../modules/api/ChatClientInstance";
import { LoginWithToken } from "../../modules/api/chatting/LoginWithToken";

const Home = () => {
  const isLoggedIn = client.isLoggedIn();
  if (!isLoggedIn) {
    LoginWithToken(client);
  }
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
