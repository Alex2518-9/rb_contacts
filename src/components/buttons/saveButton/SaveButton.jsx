import React from 'react'
import Button from '../Button'
import './SaveButton.css';

const SaveButton = ({onSave}) => {
  return (
    <Button className="saveBtn" onClick={onSave}>Save</Button>
  )
}

export default SaveButton