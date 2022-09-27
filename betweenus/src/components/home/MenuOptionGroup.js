import * as React from "react";
import { useState } from "react";
import MenuOptionItem from "./MenuOptionItem";

export default function MenuOptionGroup({
  subChoiceGroup,
  setSelectedOptions,
}) {
  const [checkedList, setCheckedList] = useState([]);

  const onCheckedElement = (checked, item) => {
    let temp;
    if (checked) {
      if (
        subChoiceGroup.multiple_count !== 0 &&
        checkedList.length >= subChoiceGroup.multiple_count
      ) {
        alert(
          "최대 " + subChoiceGroup.multiple_count + "개 까지 선택 가능합니다."
        );
        return;
      }
      temp = [...checkedList, item];
    } else if (!checked) {
      temp = checkedList.filter((el) => el !== item);
    }
    setCheckedList(temp);
    setSelectedOptions((prevState) => {
      return { ...prevState, [subChoiceGroup.name]: temp };
    });
  };

  const onRadioButtonClick = (item) => {
    const temp = [item];
    setCheckedList(temp);
    setSelectedOptions((prevState) => {
      return { ...prevState, [subChoiceGroup.name]: temp };
    });
  };

  const onOptionBtnClick = (checked, item) => {
    if (subChoiceGroup.mandatory) {
      onRadioButtonClick(item);
    } else {
      onCheckedElement(checked, item);
    }
  };

  return (
    <>
      {subChoiceGroup ? (
        <div className="menu-option-group">
          <div className="group-title">
            <strong>{subChoiceGroup.name}</strong>
            <div>
              (
              {subChoiceGroup.mandatory
                ? "필수선택"
                : subChoiceGroup.multiple_count === 0
                ? "추가선택 가능"
                : `최대 ${subChoiceGroup.multiple_count}개 선택 가능`}
              )
            </div>
          </div>
          <ol className="option-list-item">
            {subChoiceGroup.subchoices
              ? subChoiceGroup.subchoices.map((subChoice, idx) => (
                  <MenuOptionItem
                    key={idx}
                    id={idx}
                    subChoice={subChoice}
                    mandatory={subChoiceGroup.mandatory}
                    groupName={subChoiceGroup.name}
                    onOptionBtnClick={onOptionBtnClick}
                    checked={checkedList.includes(subChoice) ? true : false}
                  />
                ))
              : null}
            <MenuOptionItem />
          </ol>
        </div>
      ) : null}
    </>
  );
}
