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
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [password, setPassword] = useState(contact?.password || "");

  const uniqueId = uuid();

  let randomString = (Math.random() + 1).toString(36).substring(7);

  return (
    <div className="container">
      <div className={`form-container`}>
        <h2>
          {formTitle === "add" && "Create Contact"}
          {formTitle === "edit" && "Edit Contact"}
        </h2>

        <label className="label">Username</label>
        <Input
          className="form-input"
          onChange={(e) => setName(e.target.value)}
          value={randomString}
          defaultValue={contact?.name}
        />

        <label className="label">Email</label>
        <Input
          className="form-input"
          onChange={(e) => setEmail(e.target.value)}
          value={randomString}
          defaultValue={contact?.email}
        />

        <label className="label">Password</label>
        <Input
          className="form-input"
          onChange={(e) => setPassword(e.target.value)}
          value={randomString}
          defaultValue={contact?.password}
        />

        <div className="button-container">
          <CancelButton onCancel={onCancel} />
          {formTitle === "add" && (
            <AddContactFormButton
              onAdd={() => onAdd({ name, email, password, id: uniqueId })}
            />
          )}
          {formTitle === "edit" && confirmButton({ name, email, password })}
        </div>
      </div>
    </div>
  );
};

export default AddContactForm;
