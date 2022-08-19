import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import BottomNavigation from "../../components/common/BottomNavigation";
import HomeSearchItemList from "../../components/home/HomeItemList";
import SearchKeyword from "../../components/home/SearchKeyword";
import { useNavigate } from "react-router-dom";
// import useStoreDropdownMenu from "../../store/storeDropdownMenu";

const HomeSearch = () => {
  //   const { option, setOption } = useStoreDropdownMenu();
  const navigate = useNavigate();

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
          </div>
          <SearchKeyword />
        </div>
      </header>
      <section className="main">
        <div className="wrap">
          <HomeSearchItemList />
        </div>
      </section>
      <BottomNavigation />
    </div>
  );
};

export default HomeSearch;
