import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Input from "../../inputs/Input";
import CreateButton from "../../buttons/createButton/CreateButton";
import SaveButton from "../../buttons/saveButton/SaveButton";
import "./AddContactForm.css";

const AddContactForm = ({ onAdd, contact, onSave }) => {
  const [name, setName] = useState(contact?.name || "");
  const [email, setEmail] = useState(contact?.email || "");
  const [password, setPassword] = useState(contact?.password || "");

  const unique_id = uuid();

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
        <CreateButton
          onAdd={() =>
            onAdd({
              id: unique_id,
              name,
              email: email,
              password: password,
            })
          }
        />

        <SaveButton
          onSave={() =>
            onSave({ ...contact, name: name, email: email, password: password })
          }
        />
      </div>
    </div>
  );
};

export default AddContactForm;
