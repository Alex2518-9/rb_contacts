import React from "react";
import Button from "../Button";
import "./AddContactFormBButton.css"

const AddContactFormButton = ({ onAdd }) => {
  return (
    <Button className="addContactFormButton" onClick={onAdd}>
      Add Contact
    </Button>
  );
};

export default AddContactFormButton;
