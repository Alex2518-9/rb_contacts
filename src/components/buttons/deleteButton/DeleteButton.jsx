import React from 'react';
import Button from '../Button';
import './DeleteButton.css';

const DeleteButton = ({onDelete, darkTheme}) => {
  return (
    <Button className={darkTheme ? "delete-dark-button" : "delete-light-button"} onClick={onDelete}>Delete</Button>
  )
}



export default DeleteButton