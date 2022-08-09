import React from 'react'
import Button from '../Button'
import './AddContactButton.css';

const AddContactButton = ({moveToAddContactForm}) => {
  return (
    <Button className="addBtn" onClick={moveToAddContactForm}>Add Contact</Button>
  )
}

export default AddContactButton