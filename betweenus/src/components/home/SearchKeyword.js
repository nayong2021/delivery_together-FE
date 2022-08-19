import * as React from "react";

export default function SearchKeyword() {
  return (
    <div class="search-group">
      <div class="inp-group-search">
        <input type="text" placeholder="동네 검색" class="inp-frm" />
        <button type="button" class="btn-delete"></button>
      </div>
    </div>
  );
}
