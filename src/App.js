import React, { useState } from "react";
import "./App.css";
import CreateButton from "./components/buttons/createButton/CreateButton";
import DeleteButton from "./components/buttons/deleteButton/DeleteButton";
import EditButton from "./components/buttons/editButton/EditButton";
import SaveButton from "./components/buttons/saveButton/SaveButton";
import AddContactForm from "./components/forms/addContactForm/AddContactForm";
import { v4 as uuid } from "uuid";
import Button from "./components/buttons/Button";

//import EditContactForm from "./components/forms/editContactForm/EditContactForm";

function App() {
  const [users, setUsers] = useState([]);
  const [mode, setMode] = useState("home");
  const [editTableData, setEditTableData] = useState();

  const onDelete = (id) => {
    const newList = users.filter((item) => item.id !== id);
    setUsers(newList);
  };

  const onEdit = (id) => {
    const [editedRow] = users.filter((item) => item.id === id);
    setEditTableData(editedRow);
    setMode("edit");
  };

  const onSave = (updateContact) => {
    const newUsersList = users.map((contact) => {
      if (contact.id === updateContact.id) {
        return updateContact;
      }
      return contact;
    });
    setUsers(newUsersList);
    setMode("home");
    setEditTableData(undefined);
  };

  const onAdd = (newUser) => {
    setUsers([newUser, ...users]);
    setMode("home");
  };

  return (
    <div className="App">
      <h1>Contacts</h1>

      {mode === "home" && (
        <>
          <table className="contacts">
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map(({ id, name, email }) => (
                <tr className="sor" key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <DeleteButton onDelete={() => onDelete(id)} />
                    <EditButton onEdit={() => onEdit(id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <CreateButton onClick={() => setMode("add")}>
            Add Contact
          </CreateButton>
        </>
      )}

      {mode === "add" && (
        <AddContactForm
          onCancel={() => setMode("home")}
          confirmButton={(newContact) => (
            <>
              <CreateButton
                onClick={() =>
                  onAdd({
                    id: uuid(),
                    ...newContact,
                  })
                }
              >
                Create
              </CreateButton>
            </>
          )}
        />
      )}

      {mode === "edit" && (
        <AddContactForm
          onCancel={() => setMode("home")}
          onSave={onSave}
          contact={editTableData}
          confirmButton={(contact) => (
            <>
              <SaveButton
                onSave={() =>
                  onSave({
                    ...editTableData,
                    ...contact,
                  })
                }
              />
            </>
          )}
        />
      )}
    </div>
  );
}

export default App;
