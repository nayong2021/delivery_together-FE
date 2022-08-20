import * as React from "react";
import useStoreSearchKeyword from "../../store/storeSearchKeyword";

export default function SearchKeyword() {
  const { keyword, setKeyword } = useStoreSearchKeyword();

  const onClick = () => {
    alert("클릭");
    console.log(keyword);
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div class="home-search">
      <input
        type="text"
        placeholder="동네 검색"
        class="inp-frm"
        onKeyPress={onKeyEnter}
        value={keyword}
        name={keyword}
      />
      <button type="button" class="btn-delete"></button>
    </div>
  );
}
