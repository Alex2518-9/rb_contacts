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
import axios from "axios";
import Spinner from "./components/spinner/Spinner";
import { useQuery } from "./components/hooks/useQuery";
import { highLightText } from "./utils/highlight";

// export const ThemeContexts = createContext();

// generete random number for error test
const generateErrorNumber = Math.floor(Math.random() * 10);

// for useQuery
const fetchInitialContacts = () => {
  if (generateErrorNumber === 9) {
    return Promise.reject({ message: "failed" });
  } else {
    return axios
      .get("https://dummyjson.com/users")
      .then((response) => response.data.users);
  }
};

function App() {
  const [mode, setMode] = useState("home");
  const [editContactData, setEditContactData] = useState();
  const [theme, setTheme] = useState("dark");
  const [search, setSearch] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    field: "name",
    ascending: true,
  });

  // data fetch
  const { data, error, isLoading, setData } = useQuery(fetchInitialContacts, {
    defaultValue: [],
  });

  // delete contact
  const onDelete = (id) => {
    const shorterContactList = data.filter((item) => item.id !== id);
    setData(shorterContactList);
  };

  // edit contact
  const onEdit = (id) => {
    const [editedRow] = data.filter((item) => item.id === id);
    setEditContactData(editedRow);
    setMode("edit");
  };

  // save edited contact
  const onSave = (updateContact) => {
    const newUsersList = data.map((contact) => {
      if (contact.id === updateContact.id) {
        return updateContact;
      }
      return contact;
    });
    setData(newUsersList);
    setMode("home");
    setEditContactData(undefined);
  };

  // add new contact
  const onAdd = (newUser) => {
    console.log(newUser);
    setData([newUser, ...data]);

    setMode("home");
  };

  // switch to light mode
  const onLight = () => {
    setTheme("light");
  };

  // switch to dark mode
  const onDark = () => {
    setTheme("dark");
  };

  // search by name and email
  const searchedContact = data.filter((contact) => {
    
    return search.length === 0 ? true : 
     (     
        search.every((characters) => contact.username.toLowerCase().includes(characters.toLowerCase()))) ||
        search.every((characters) => contact.email.toLowerCase().includes(characters.toLowerCase())
        );
  });

  // sort by name and email
  const visibleContacts = [...searchedContact].sort((a, b) => {
    const intl = Intl.Collator(undefined, {
      numeric: true,
    });
    let order = intl.compare(a[sortConfig.field], b[sortConfig.field]);
    return sortConfig.ascending ? order : order * -1;
  });

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
        <div>
          <div className="grid-container">
            <div className="contact-container-title-container">
              <div className="contact-container-title">
                <h1>Contacts</h1>

                <input
                  className="searchInput"
                  placeholder="search..."
                  type="text"
                  name="keyword"
                  defaultValue={search.join(" ")}
                  onChange={(e) => setSearch(e.target.value.trim() ? e.target.value.trim().split(" ") : [])}
                />
              </div>
            </div>
            <table className={`contact-container-body`}>
              <thead>
                <tr>
                  <th className="username-table">
                    Username
                    <i
                      onClick={() =>
                        setSortConfig({
                          field: "username",
                          ascending: !sortConfig.ascending,
                        })
                      }
                    >
                      {sortConfig.field === "username" &&
                      sortConfig.ascending ? (
                        <AiOutlineSortAscending />
                      ) : (
                        <AiOutlineSortDescending />
                      )}
                    </i>
                  </th>
                  <th className="email-table">
                    Email
                    <i
                      onClick={() =>
                        setSortConfig({
                          field: "email",
                          ascending: !sortConfig.ascending,
                        })
                      }
                    >
                      {sortConfig.field === "email" && sortConfig.ascending ? (
                        <AiOutlineSortAscending />
                      ) : (
                        <AiOutlineSortDescending />
                      )}
                    </i>
                  </th>
                  <th className="password-table">Password</th>
                  <th className="action-table">Action</th>
                </tr>
              </thead>

              <tbody className="table-body">
                {isLoading ? (
                  <div className="spinner">
                    <Spinner />
                  </div>
                ) : (
                  <div>
                    {error && (
                      <div>
                        <p className="error-message">{error.message}</p>
                      </div>
                    )}
                  </div>
                )}
                {data &&
                  visibleContacts.map(({ id, username, email, password }) => (
                    <tr className="sor" key={id}>
                      <td>
                        {highLightText(username, search).map(
                          ({ part, highlight }) =>
                            highlight ? (
                              <span style={{ color: "#ff6b35" }}>{part}</span>
                            ) : (
                              <span>{part}</span>
                            )
                        )}
                      </td>
                      <td>
                        {highLightText(email, search).map(
                          ({ part, highlight }) =>
                            highlight ? (
                              <span style={{ color: "#ff6b35" }}>{part}</span>
                            ) : (
                              <span>{part}</span>
                            )
                        )}
                      </td>
                      <td>
                        <PasswordInput value={password} />
                      </td>

                      <td className="action-button-container">
                        <div className="action-button-container">
                          <DeleteButton onDelete={() => onDelete(id)} />
                          <EditButton onEdit={() => onEdit(id)} />
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
          <CreateButton onClick={() => setMode("add")}>
            <AiOutlinePlus />
          </CreateButton>
        </div>
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
