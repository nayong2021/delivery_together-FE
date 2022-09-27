import * as React from "react";
import MenuItem from "./MenuItem";

export default function MenuCategory({ categoryList, onMenuClick }) {
  return (
    <div className="menu-category">
      <div className="menu-category-info">
        <div className="category-tit">{categoryList.name}</div>
        {categoryList.description ? (
          <div className="category-desc">{categoryList.description} </div>
        ) : null}
      </div>
      <ol className="list-menu">
        {categoryList.items.map((item, idx) => (
          <MenuItem key={idx} menuData={item} onMenuClick={onMenuClick} />
        ))}
      </ol>
    </div>
  );
}
