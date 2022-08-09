import React, { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';


function App() {

  const [ users, setUsers ] = useState([]);
  const [ mode, setMode ] = useState("home");



const handleDelete = (id) => {
  
  const newList = users.filter((item) => item.id !== id);
   setUsers(newList);
 
};
 
 const onAdd = (newUser) => {
  setUsers([newUser, ...users])
  setMode("home")
};

  return (
    <div className="App">

    <h1>Contacts</h1>
    
      
      {mode === "home" && (
        <>
        <table id='contacts'>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {users.map(({id, username, email}) => (
            <tr className='sor' key={id}>
              <td>{username}</td>
              <td>{email}</td>
              <td><button className='deleteBtn' onClick={() => handleDelete(id)}>Delete</button></td>
            </tr>
          ))}
          </tbody>
        </table>
        
        <button className='addBtn' onClick={() => setMode("add")}>Add Contact</button>
        </>
        
      ) }

      {mode === "add" && <AddContact onAdd={onAdd} />}
      

      
      
    </div>
  );
}

export default App;
