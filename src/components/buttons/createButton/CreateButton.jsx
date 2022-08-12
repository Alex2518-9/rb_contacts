import React, { useContext } from "react";
import { ThemeContexts } from "../../../App";
import Button from "../Button";
import "./CreateButton.css";

const CreateButton = ({ onClick, children }) => {
  const { theme } = useContext(ThemeContexts);

  return (
    <Button
      className={theme === "dark" ? "add-dark-button" : "add-light-button"}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CreateButton;
