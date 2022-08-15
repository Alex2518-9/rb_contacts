import React from "react";
import Button from "../Button";
import "./CreateButton.css";

const CreateButton = ({ onClick, children }) => {
 

  return (
    <Button
      className={`add-button`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CreateButton;
