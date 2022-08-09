import React from 'react';
import Button from '../Button';
import './CreateButton.css';

const CreateButton = ({onAdd}) => {
  return (
    <Button className="createBtn" onClick={onAdd}>Create</Button>
  )
}

export default CreateButton