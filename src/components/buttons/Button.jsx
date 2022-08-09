import React from "react";
import "./Buttons.css";

const classNames = (...classNames) =>
  classNames.filter((className) => className).join(" ");

const Button = ({ children, className, onClick }) => {
  return <button className={classNames("btn", className)} onClick={onClick}>{children}</button>;
};

export default Button;
