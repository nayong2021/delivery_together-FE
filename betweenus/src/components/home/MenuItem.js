import * as React from "react";

export default function MenuItem({ menuData, onMenuClick }) {
  return (
    <li onClick={() => onMenuClick(menuData)}>
      {menuData.image ? (
        <div className="img-group">
          <img src={menuData.image} alt="썸네일" className="thumb" />
        </div>
      ) : null}

      <div className="menu-info">
        <div className="tit">{menuData.name}</div>
        <div className="menu-desc">{menuData.description}</div>
        <div className="price">{Number(menuData.price).toLocaleString()}원</div>
      </div>
    </li>
  );
}
