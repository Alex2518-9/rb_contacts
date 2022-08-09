import React, { useState } from "react";
import "./App.css";
import AddContactButton from "./components/buttons/addContactButton/AddContactButton";
import DeleteButton from "./components/buttons/deleteButton/DeleteButton";
import EditButton from "./components/buttons/editButton/EditButton";
import AddContactForm from "./components/forms/addContactForm/AddContactForm";

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
    setMode("add");
  };

  const onSave = (newContact) => {
    const newUsersList = users.map((contact) => {
      if (contact.id === newContact.id) {
        return newContact;
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

          <AddContactButton moveToAddContactForm={() => setMode("add")} />
        </>
      )}

      {mode === "add" && (
        <AddContactForm onAdd={onAdd} onSave={onSave} contact={editTableData} />
      )}
    </div>
  );
}

export default App;
