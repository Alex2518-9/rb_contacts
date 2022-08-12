import React, { useState } from "react";
import "./App.css";
import CreateButton from "./components/buttons/createButton/CreateButton";
import DeleteButton from "./components/buttons/deleteButton/DeleteButton";
import EditButton from "./components/buttons/editButton/EditButton";
import SaveButton from "./components/buttons/saveButton/SaveButton";
import AddContactForm from "./components/forms/addContactForm/AddContactForm";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  const [contacts, setContacts] = useState([]);
  const [mode, setMode] = useState("home");
  const [editContactData, setEditContactData] = useState();
  const [darkTheme, setDarkTheme] = useState(true);

  const onDelete = (id) => {
    setContacts((previouState) =>
      previouState.filter((item) => item.id !== id)
    );
  };

  const onEdit = (id) => {
    const [editedRow] = contacts.filter((item) => item.id === id);
    setEditContactData(editedRow);
    setMode("edit");
  };

  const onSave = (updateContact) => {
    const newUsersList = contacts.map((contact) => {
      if (contact.id === updateContact.id) {
        return updateContact;
      }
      return contact;
    });
    setContacts(newUsersList);
    setMode("home");
    setEditContactData(undefined);
  };

  const onAdd = (newUser) => {
    setContacts([newUser, ...contacts]);
    setMode("home");
  };

  const onLight = () => {
    setDarkTheme(false);
  };

  const onDark = () => {
    setDarkTheme(true);
  };

  return (
    <div className={darkTheme ? "App" : ".App-light"}>
      <div className="switch">
        <div className="switch-container">
          <div className={darkTheme ? "moon" : "sun"} onClick={onDark}>
            <BsMoon />
          </div>
          <div className={darkTheme ? "sun" : "moon"} onClick={onLight}>
            <BsSun />
          </div>
        </div>
      </div>

      {mode === "home" && (
        <>
          <div
            className={
              darkTheme
                ? "contact-container-title-dark"
                : "contact-container-title-light"
            }
          >
            <h1>Contacts</h1>
          </div>
          <table
            className={
              darkTheme
                ? "contact-container-body-dark"
                : "contact-container-body-light"
            }
          >
            <thead>
              <tr>
                <div className="head-texts">
                  <th>Username</th>
                  <th>Email</th>
                </div>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(({ id, name, email }) => (
                <tr className="sor" key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <div className="action-button-container">
                      <DeleteButton
                        darkTheme={darkTheme}
                        onDelete={() => onDelete(id)}
                      />
                      <EditButton
                        darkTheme={darkTheme}
                        onEdit={() => onEdit(id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <CreateButton darkTheme={darkTheme} onClick={() => setMode("add")}>
            <AiOutlinePlus />
          </CreateButton>
        </>
      )}

      {mode === "add" && (
        <AddContactForm
          formTitle={mode}
          darkTheme={darkTheme}
          onCancel={() => setMode("home")}
          onAdd={onAdd}
        />
      )}

      {mode === "edit" && (
        <AddContactForm
          formTitle={mode}
          darkTheme={darkTheme}
          onCancel={() => setMode("home")}
          onSave={onSave}
          contact={editContactData}
          confirmButton={(contact) => (
            <>
              <SaveButton
                onSave={() =>
                  onSave({
                    ...editContactData,
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
