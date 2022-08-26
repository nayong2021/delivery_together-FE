import * as React from "react";
import useStoreSearchKeyword from "../../store/storeSearchKeyword";
import { useEffect, useState } from "react";

export default function SearchKeyword() {
  const { setKeyword } = useStoreSearchKeyword();
  const [input, setInput] = useState("");

  useEffect(() => {
    setKeyword("");
  }, []);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const onKeyEnter = (e) => {
    if (e.key === "Enter") {
      setKeyword(input);
    }
  };

  const handleClear = (e) => {
    setInput("");
    setKeyword("");
  };

  return (
    <div className="home-search">
      <input
        type="text"
        placeholder="모집글 검색"
        className="inp-frm"
        onKeyPress={onKeyEnter}
        onChange={handleInput}
        value={input}
      />
      <button
        type="button"
        className="btn-delete"
        onClick={handleClear}
      ></button>
    </div>
  );
}
