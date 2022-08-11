import React, { useState } from "react";
import CancelButton from "../../buttons/cancelButton/CancelButton";
import Input from "../../inputs/Input";
import "./AddContactForm.css";

const AddContactForm = ({ contact, confirmButton, onCancel, darkTheme, formTitle }) => {
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [password, setPassword] = useState(contact?.password || "");

  return (
    <div className="container">
      <div className={darkTheme ? "form-container-dark" : "form-container-light"}>
        <h2>
          { formTitle === "add" && "Create Contact"}
          { formTitle === "edit" && "Edit Contact"}
        </h2>
            
    

        <label className="label">Username</label>
        <Input
          className="form-input"
          onChange={(e) => setName(e.target.value)}
          defaultValue={contact?.name}
        />

        <label className="label">Email</label>
        <Input
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
          defaultValue={contact?.email}
        />

        <label className="label">Password</label>
        <Input
          className="form-input"
          onChange={(e) => setPassword(e.target.value)}
          defaultValue={contact?.password}
        />

        <div className="button-container">
          <CancelButton onCancel={onCancel} />
          {confirmButton({ name, email, password })}
        </div>
      </div>
    </div>
  );
};

export default AddContactForm;
