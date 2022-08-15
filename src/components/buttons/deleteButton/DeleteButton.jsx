import React from 'react';

import Button from '../Button';
import './DeleteButton.css';

const DeleteButton = ({onDelete}) => {

  

  return (
    <Button className={`delete-button`} onClick={onDelete}>Delete</Button>
  )
}



export default DeleteButton