import React from 'react';
import Button from '../Button';
import './CreateButton.css';


const CreateButton = ({onClick, children}) => {
  return (
    <Button className="createBtn addBtn cancelBtn" onClick={onClick}>{children}</Button>
  )
}

export default CreateButton