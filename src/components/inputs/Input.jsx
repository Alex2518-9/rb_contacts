import React from "react";
import { classNames } from "../../utils";
import "./Input.css";

const Input = ({
  className,
  onChange,
  defaultValue,
  type = "text",
  required = false,
}) => {
  return (
    <input
      className={classNames("inp", className)}
      onChange={onChange}
      type={type}
      defaultValue={defaultValue}
      required={required}
    />
  );
};

export default Input;
