import React, { useState } from "react";
import "./style.scss";
import { useCustomDropdown } from "./useCostumDropdown";
import i18next from "i18next";

export const CustomDropdown = ({
  className,
  options = [],
  firstDefault = null,
  value,
  setValue = () => {},
  onChange = () => {},
}) => {
  const { handleClose, innerValue, handleChange } = useCustomDropdown(
    value,
    setValue,
    onChange
  );

  return (
    <div className="dropdown">
      <button className={className ? "dropbtn-dark" : "dropbtn"}>
        {" "}
        {value?.label || innerValue?.label || options[0]?.label || firstDefault}
      </button>
      <ul className="dropdown-content">
        {options.map((option, index) => (
          <li
            className="dropdown-list"
            key={option.value || index}
            onClick={() => {
              handleChange(option);
              setValue(option);
              handleClose();
              onChange(option.value);
            }}
          >
            <button className="optionBtn">{option.label}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
