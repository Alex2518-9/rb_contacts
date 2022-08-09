import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

import '../styles/AddContact.css';

const AddContact = ({onAdd}) => {

    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const unique_id = uuid();

   


  return (
    <div className='form-container'>
        
            <h2>Create Contact</h2>
            <label className='lb'>Username</label>
            <input className='inp' type="text" onChange={(e) => setName(e.target.value)} required/>

            <label className='lb'>Email</label>
            <input className='inp' type="text" onChange={(e) => setEmail(e.target.value)} required/>

            <label className='lb'>Password</label>
            <input className='inp' type="text" onChange={(e) => setPassword(e.target.value)} required/>

            <button className='CreateBtn' onClick={() => onAdd({
            id: unique_id,
            username: name,
            email: email,
            pw: password
        })}>Create</button>
        
    </div>
  )
}


export default AddContact