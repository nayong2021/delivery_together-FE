import * as React from "react";
import { ReactComponent as SearchIcon } from "../../assets/img/ico_search1.svg";
import textLengthOverCut from "../../hooks/textLengthOverCut";
import FilterMenu from "./FilterMenu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetCurrentUserApi } from "../../modules/api/common/GetCurrentUserApi";

export default function DrowpdownMenuHeader() {
  const navigate = useNavigate();
  const [town, setTown] = useState("");
  const onClickSearch = () => {
    navigate("search");
  };
  const getList = async () => {
    const data = GetCurrentUserApi();
    data.then((r) => {
      console.log(r);
      if (r.representationTown === "") {
        navigate("/setting/region");
      }
      setTown(r.representationTown);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <header className="header">
      <div className="hd">
        <div className="hd-filter" onClick={() => navigate("/setting/region")}>
          {textLengthOverCut(town, 16, "...")} ▾
        </div>
        <div className="hd-search">
          <FilterMenu />
          <div className="hd-space"></div>
          <SearchIcon onClick={onClickSearch} />
        </div>
      </div>
    </header>
  );
}
