import * as React from "react";
import { ReactComponent as SearchIcon } from "../../assets/img/ico_search1.svg";

export default function DrowpdownMenuHeader() {
  return (
    <header className="header">
      <div className="hd">
        <select className="hd-filter">
          <option>최신순</option>
          <option>가까운 순</option>
          <option>모집인원 많은 순</option>
        </select>
        <a href="#!" className="hd-search">
          <SearchIcon />
        </a>
      </div>
    </header>
  );
}
