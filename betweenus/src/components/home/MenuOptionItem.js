import * as React from "react";

export default function MenuOptionItem({
  id,
  subChoice,
  mandatory,
  groupName,
  onOptionBtnClick,
  checked,
}) {
  const checkboxId = groupName + id;
  return (
    <>
      {subChoice ? (
        <li>
          {mandatory ? (
            <label className="container">
              <input
                type="radio"
                name={groupName}
                onChange={(e) => {
                  onOptionBtnClick(e.target.checked, subChoice);
                }}
                checked={checked}
              />
              <span className="checkmark"></span>
            </label>
          ) : (
            <label htmlFor={checkboxId} className="chk_box">
              <input
                type="checkbox"
                id={checkboxId}
                onChange={(e) => {
                  onOptionBtnClick(e.target.checked, subChoice);
                }}
                checked={checked}
              />
              <span className="on"></span>
            </label>
          )}
          <div className="option-name">{subChoice.name}</div>
          <div className="option-price">
            {subChoice.price === "0"
              ? "추가비용 없음"
              : `+${Number(subChoice.price).toLocaleString()}원`}
          </div>
        </li>
      ) : null}
    </>
  );
}
