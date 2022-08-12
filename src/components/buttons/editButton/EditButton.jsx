import React, { useContext } from 'react';
import { ThemeContexts } from "../../../App";
import Button from '../Button';
import './EditButton.css';

const EditButton = ({onEdit}) => {

  const {theme} = useContext(ThemeContexts);


  return (
        <Button className={`edit-button ${theme}`} onClick={onEdit}>Edit</Button>
  )
}

export default EditButton