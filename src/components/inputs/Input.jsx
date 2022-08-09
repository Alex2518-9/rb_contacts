import React from "react";
import "./Input.css";

const classNames = (...classNames) =>
  classNames.filter((className) => className).join(" ");

const Input = ({ className, onChange, defaultValue }) => {
  return (
    <input
      className={classNames("inp", className)}
      onChange={onChange}
      type="text"
      defaultValue={defaultValue}
      required
    />
  );
};

export default Input;
