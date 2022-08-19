import * as React from "react";
import { ReactComponent as SearchIcon } from "../../assets/img/ico_search1.svg";
// import useStoreDropdownMenu from "../../store/storeDropdownMenu";
import FilterMenu from "./FilterMenu";
import { useNavigate } from "react-router-dom";

export default function DrowpdownMenuHeader() {
  const navigate = useNavigate();
  const onClickSearch = () => {
    navigate("search");
  };
  return (
    <header className="header">
      <div className="hd">
        <div className="hd-filter">강남구 테헤란로 311</div>
        <div className="hd-search">
          <FilterMenu />
          <div className="hd-space"></div>
          <SearchIcon onClick={onClickSearch} />
        </div>
      </div>
    </header>
  );
}
