import * as React from "react";
import "../../assets/css/common.css";
import MetaTag from "../../components/common/MetaTag";
import HomeSearchItemList from "../../components/home/HomeSearchItemList";
import SearchKeyword from "../../components/home/SearchKeyword";
import { useNavigate } from "react-router-dom";

const HomeSearch = () => {
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
            모집글 검색
          </div>
        </div>
        <SearchKeyword />
      </header>
      <section className="main">
        <div className="wrap">
          <div className="search-div"></div>
          <HomeSearchItemList />
        </div>
      </section>
    </div>
  );
};

export default HomeSearch;
