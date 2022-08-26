import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import DrowpdownMenuHeader from "../../components/home/DropdownMenuHeader";
import BottomNavigation from "../../components/common/BottomNavigation";
import HomeItemList from "../../components/home/HomeItemList";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useStoreCurrentUser from "../../store/storeCurrentUser";

const Home = () => {
  const navigate = useNavigate();
  const { user, setUser } = useStoreCurrentUser();
  useEffect(() => {
    // console.log(Object.keys(user).length === 0);
    if (Object.keys(user).length === 0) {
      navigate("/guide");
    }
  }, []);
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
