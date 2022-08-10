import React, { useState } from "react";
import Button from "../../buttons/Button";
import Input from "../../inputs/Input";
import "./AddContactForm.css";

const AddContactForm = ({ contact, confirmButton, onCancel }) => {
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [password, setPassword] = useState(contact?.password || "");

  return (
    <div className="form-container">
      <h2>Create Contact</h2>

      <label className="lb">Username</label>
      <Input
        className="inp"
        onChange={(e) => setName(e.target.value)}
        defaultValue={contact?.name}
      />

      <label className="lb">Email</label>
      <Input
        className="inp"
        onChange={(e) => setEmail(e.target.value)}
        defaultValue={contact?.email}
      />

      <label className="lb">Password</label>
      <Input
        className="inp"
        onChange={(e) => setPassword(e.target.value)}
        defaultValue={contact?.password}
      />

      <div className="button-container">
        <Button className="cancelBtn" onClick={onCancel}>
          Cancel
        </Button>
        {confirmButton({ name, email, password })}
      </div>
    </div>
  );
};

export default AddContactForm;
