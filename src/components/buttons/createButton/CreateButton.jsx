import React from "react";
import Button from "../Button";
import "./CreateButton.css";

const CreateButton = ({ onClick, children, darkTheme }) => {
  return (
    <Button
      className={darkTheme ? "add-dark-button" : "add-light-button"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CreateButton;
