import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import BottomNavigation from "../../components/common/BottomNavigation";
import HomeItemList from "../../components/home/HomeItemList";
// import useStoreDropdownMenu from "../../store/storeDropdownMenu";

const HomeSearch = () => {
  //   const { option, setOption } = useStoreDropdownMenu();
  return (
    <div id="root">
      <MetaTag />
      <header className="header"></header>
      <section className="main">
        <div className="wrap">
          <HomeItemList />
        </div>
      </section>
      <BottomNavigation />
    </div>
  );
};

export default HomeSearch;
