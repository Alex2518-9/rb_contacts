import React, { useState } from 'react';
import DeleteButton from '../../buttons/deleteButton/DeleteButton';
import EditButton from '../../buttons/editButton/EditButton';



const ContactTable = () => {

    const [users, setUsers] = useState([]);

    const onDelete = (id) => {
        const newList = users.filter((item) => item.id !== id);
        setUsers(newList);
      };
    
      const onEdit = (id) => {
        const editList = users.filter((item) => item.id === id);
        //setMode("add");
      };

  return (
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
  )
}

export default ContactTable