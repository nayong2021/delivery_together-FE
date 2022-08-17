import * as React from "react";
import { ReactComponent as SearchIcon } from "../../assets/img/ico_search1.svg";
import { ReactComponent as MenuIcon } from "/Users/kwaksj329/BetweenUs_FE/betweenus/src/assets/img/menu-01.svg";
import useStoreDropdownMenu from "../../store/storeDropdownMenu";

export default function DrowpdownMenuHeader() {
  const { option, setOption } = useStoreDropdownMenu();
  const onClickSearch = () => {
    if (!option || option === "최신순") {
      console.log("No");
    } else if (option === "모집인원 많은 순") {
    }
  };
  return (
    <header className="header">
      <div className="hd">
        <div className="hd-filter">강남구 테헤란로 311</div>
        <div className="hd-search">
          <MenuIcon className="my-filter" />
          <div className="hd-space"></div>
          <SearchIcon onClick={onClickSearch} />
        </div>
      </div>
    </header>
  );
}

/* <option>최신순</option>
<option>가까운 순</option>
<option>모집인원 많은 순</option> */
