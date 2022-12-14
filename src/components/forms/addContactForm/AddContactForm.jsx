import React, { useState } from "react";
import AddContactFormButton from "../../buttons/addContactFormButton/AddContactFormButton";
import CancelButton from "../../buttons/cancelButton/CancelButton";
import Input from "../../inputs/Input";
import "./AddContactForm.css";
import { v4 as uuid } from "uuid";

const AddContactForm = ({
  contact,
  confirmButton,
  onAdd,
  onCancel,
  formTitle,
}) => {
  const [username, setUsername] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [password, setPassword] = useState(contact?.password || "");

  const uniqueId = uuid();

  // let randomString = (Math.random() + 1).toString(36).substring(7);

  return (
    <div className="container">
      <div className={`form-container`}>
        <h2>
          {formTitle === "add" && "Create Contact"}
          {formTitle === "edit" && "Edit Contact"}
        </h2>

        <div className="input-group">
          <label className="label">Username</label>
          <Input
            className="form-input"
            onChange={(e) => setUsername(e.target.value)}
            defaultValue={contact?.username}
          />
        </div>

        <div className="input-group">
          <label className="label">Email</label>
          <Input
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={contact?.email}
          />
        </div>
        <div className="input-group">
          <label className="label">Password</label>
          <Input
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={contact?.password}
          />
        </div>

        <div className="button-container">
          <CancelButton onCancel={onCancel} />
          {formTitle === "add" && (
            <AddContactFormButton
              onAdd={() => onAdd({ username, email, password, id: uniqueId })}
            />
          )}
          {formTitle === "edit" && confirmButton({ username, email, password })}
        </div>
      </div>
    </div>
  );
};

export default AddContactForm;
