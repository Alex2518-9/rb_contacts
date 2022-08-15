import React, { createContext, useState } from "react";
import "./App.css";
import "./GlobalStyle.css";
import CreateButton from "./components/buttons/createButton/CreateButton";
import DeleteButton from "./components/buttons/deleteButton/DeleteButton";
import EditButton from "./components/buttons/editButton/EditButton";
import SaveButton from "./components/buttons/saveButton/SaveButton";
import AddContactForm from "./components/forms/addContactForm/AddContactForm";
import { BsMoon } from "react-icons/bs";
import { BsSun } from "react-icons/bs";
import {
  AiOutlineEye,
  AiOutlinePlus,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export const ThemeContexts = createContext();

function App() {
  const [contacts, setContacts] = useState([]);
  const [mode, setMode] = useState("home");
  const [editContactData, setEditContactData] = useState();
  const [theme, setTheme] = useState("dark");
  const [selectedPassword, setSelectedPassword] = useState([]);

  console.log();
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
    setTheme("light");
  };

  const onDark = () => {
    setTheme("dark");
  };

  const onShowAndHidePassword = (id) => {
     const [changePasswordRow] = contacts.filter((item) => item.id === id);
    // setSelectedPassword([...selectedPassword, changePasswordRow])
    // selectedPassword.push(changePasswordRow)
    // setSelectedPassword([...changePasswordRow]);
    // const keyIndex = selectedPassword.indexOf(id);

    // if (keyIndex >= 0 ) {
    //   setSelectedPassword([...selectedPassword.slice(0, keyIndex), selectedPassword.slice(keyIndex + 1)])
    // }else{
    //   selectedPassword.push(id)
    // }

    // setSelectedPassword({selectedPassword});
    
    console.log(selectedPassword);
    if (selectedPassword?.id === changePasswordRow.id) {
      setSelectedPassword();
    }else{
      setSelectedPassword(changePasswordRow);
    }
  };

  return (
    <ThemeContexts.Provider>
      <div className={`App ${theme}`}>
        <div className="switch">
          <div className="switch-container">
            <div className={theme === "dark" ? "moon" : "sun"} onClick={onDark}>
              <BsMoon />
            </div>
            <div
              className={theme === "dark" ? "sun" : "moon"}
              onClick={onLight}
            >
              <BsSun />
            </div>
          </div>
        </div>

        {mode === "home" && (
          <>
            <div className="contact-container-title">
              <h1>Contacts</h1>
            </div>
            <table className={`contact-container-body`}>
              <thead>
                <tr>
                  <div className="head-texts">
                    <th>Username</th>
                    <th>Email</th>
                    <th>Password</th>
                  </div>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map(({ id, name, email, password }) => (
                  <tr className="sor" key={id}>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>
                      <input type={selectedPassword?.id === id ? "text" : "password"} value={password} disabled />
                      <i onClick={() => onShowAndHidePassword(id)}>
                      {selectedPassword?.id === id ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        
                      </i>
                    </td>

                    <td>
                      <div className="action-button-container">
                        <DeleteButton onDelete={() => onDelete(id)} />
                        <EditButton onEdit={() => onEdit(id)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <CreateButton onClick={() => setMode("add")}>
              <AiOutlinePlus />
            </CreateButton>
          </>
        )}

        {mode === "add" && (
          <AddContactForm
            formTitle={mode}
            onCancel={() => setMode("home")}
            onAdd={onAdd}
          />
        )}

        {mode === "edit" && (
          <AddContactForm
            formTitle={mode}
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
    </ThemeContexts.Provider>
  );
}

export default App;
