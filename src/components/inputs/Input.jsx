import React from "react";
import { classNames } from "../../utils";
import "./Input.css";

const Input = ({
  className,
  onChange,
  defaultValue,
  type = "text",
  required = false,
  value
}) => {
  return (
    <input
      className={classNames("inp", className)}
      onChange={onChange}
      type={type}
      defaultValue={defaultValue}
      required={required}
      value={value}
    />
  );
};

export default Input;
