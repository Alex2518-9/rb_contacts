import React from 'react'
import Button from '../Button'
import './CancelButton.css'

const CancelButton = ({ onCancel }) => {
  return (
    <Button className="cancelBtn" onClick={onCancel}>Cancel</Button>
  )
}

export default CancelButton