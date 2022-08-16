import React, { useState } from "react";
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
  AiOutlinePlus,
  AiOutlineSortAscending,
  AiOutlineSortDescending,
} from "react-icons/ai";
import PasswordInput from "./components/inputs/passwordInput/PasswordInput";
//import SearchInput from "./components/inputs/searchInput/SearchInput";

// export const ThemeContexts = createContext();

function App() {
  const [contacts, setContacts] = useState([]);
  const [mode, setMode] = useState("home");
  const [editContactData, setEditContactData] = useState();
  const [theme, setTheme] = useState("dark");
  const [search, setSearch] = useState("");
  const [sortByNameAZ, setSortByNameAZ] = useState(true);
  const [sortByEmailAZ, setSortByEmailAZ] = useState(true);

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

  const searchedContact = contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  // const sortedNameList = 
  const sortedList = [...searchedContact].sort((a, b) => a.name < b.name ? -1 : 1);
  const sortedListCompare = [...searchedContact].sort((a, b) => a.name > b.name ? -1 : 1);

  return (
    // <ThemeContexts.Provider>
    <div className={`App ${theme}`}>
      <div className="switch">
        <div className="switch-container">
          <div className={theme === "dark" ? "moon" : "sun"} onClick={onDark}>
            <BsMoon />
          </div>
          <div className={theme === "dark" ? "sun" : "moon"} onClick={onLight}>
            <BsSun />
          </div>
        </div>
      </div>

      {mode === "home" && (
        <>
          <div className="contact-container-title">
            <h1>Contacts</h1>
            {/* <SearchInput  searchedList={contacts}/> */}
            <input
              className="searchInput"
              placeholder="search..."
              type="text"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <table className={`contact-container-body`}>
            <thead>
              <tr>
                <div className="head-texts">
                  <th>
                    Username
                    <i onClick={() => setSortByNameAZ(!sortByNameAZ)}>
                      {sortByNameAZ ? (
                        <AiOutlineSortAscending />
                      ) : (
                        <AiOutlineSortDescending />
                      )}
                    </i>
                  </th>
                  <th>Email<i onClick={() => setSortByEmailAZ(!sortByEmailAZ)}>
                      {sortByEmailAZ ? (
                        <AiOutlineSortAscending />
                      ) : (
                        <AiOutlineSortDescending />
                      )}
                    </i></th>
                  <th>Password</th>
                </div>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortByNameAZ ? sortedList.map(({ id, name, email, password }) => (
                <tr className="sor" key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <PasswordInput value={password} />
                  </td>

                  <td>
                    <div className="action-button-container">
                      <DeleteButton onDelete={() => onDelete(id)} />
                      <EditButton onEdit={() => onEdit(id)} />
                    </div>
                  </td>
                </tr>
              )) : 
              sortedListCompare.map(({ id, name, email, password }) => (
                <tr className="sor" key={id}>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>
                    <PasswordInput value={password} />
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
            <SaveButton
              onSave={() =>
                onSave({
                  ...editContactData,
                  ...contact,
                })
              }
            />
          )}
        />
      )}
    </div>
    // </ThemeContexts.Provider>
  );
}

export default App;
