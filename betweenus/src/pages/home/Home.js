import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import DrowpdownMenuHeader from "../../components/home/DropdownMenuHeader";
import BottomNavigation from "../../components/common/BottomNavigation";
import HomeItemList from "../../components/home/HomeItemList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useStoreCurrentUser from "../../store/storeCurrentUser";
import { GetCurrentUserApi } from "../../modules/api/member/GetCurrentUserApi";

const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useStoreCurrentUser();
  // const getCurrentUser = async () => {
  //   const result = await GetCurrentUserApi();
  //   if (result) {
  //     setUser(result.email);
  //   } else {
  //     navigate("/guide");
  //   }
  // };
  // useEffect(() => {
  //   getCurrentUser();
  // }, [user]);
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
