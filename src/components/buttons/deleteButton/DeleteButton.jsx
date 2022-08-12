import React, { useContext } from 'react';
import { ThemeContexts } from '../../../App';
import Button from '../Button';
import './DeleteButton.css';

const DeleteButton = ({onDelete}) => {

  const {theme} = useContext(ThemeContexts);

  return (
    <Button className={`delete-button ${theme}`} onClick={onDelete}>Delete</Button>
  )
}



export default DeleteButton