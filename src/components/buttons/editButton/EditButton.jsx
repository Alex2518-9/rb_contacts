import React from "react";
import Button from "../Button";
import "./EditButton.css";

const EditButton = ({ onEdit }) => {
  return (
    <Button className={`edit-button`} onClick={onEdit}>
      Edit
    </Button>
  );
};

export default EditButton;
