import * as React from "react";
import useStoreSearchKeyword from "../../store/storeSearchKeyword";
import { useEffect } from "react";

export default function SearchKeyword() {
  const { keyword, setKeyword } = useStoreSearchKeyword();

  useEffect(() => {
    setKeyword("");
  }, []);

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      setKeyword(e.target.value);
    }
  };
  return (
    <div className="home-search">
      <input
        type="text"
        placeholder="동네 검색"
        className="inp-frm"
        onKeyPress={onKeyEnter}
        name={keyword}
      />
      <button type="button" className="btn-delete"></button>
    </div>
  );
}
