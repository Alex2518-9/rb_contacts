import React from "react";
import { classNames } from "../../utils";
import "./Buttons.css";

const Button = ({ children, className, onClick }) => {
  return (
    <button className={classNames("btn", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
