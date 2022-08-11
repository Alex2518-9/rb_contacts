import React from 'react';
import Button from '../Button';
import './EditButton.css';

const EditButton = ({onEdit, darkTheme}) => {
  return (
        <Button className={darkTheme ? "edit-dark-button" : "edit-light-button"} onClick={onEdit}>Edit</Button>
  )
}

export default EditButton