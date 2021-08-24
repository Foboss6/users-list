import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import InputForm from './InputForm.js';
import useUsersActions from '../hooks/useUsersActions'
import { Link } from 'react-router-dom';


export default function Create() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    position: ''
  });

  let inputs = [1, 2, 3];

  const {addNewUser, users} = useUsersActions();

  const initialInputs = (input, inputNumb) => {
    inputs[inputNumb] = input;
  }

  const clearInputs = () => {
    inputs.forEach((input) => {input.value = '';})
  }
  
  const onInputChange = (event, fieldName) => {
    setUser((prevUser) => ({
      ...prevUser,
      [fieldName]: event.target.value
    }));
  }

  const handleButtonClick = () => {
    addNewUser({
      id: Date.now(),
      ...user,
    });

    clearInputs('');
  }

  return(
    <div>
      <h3>Add new user</h3>
      <InputForm label='First name' inputRef={(ev) => initialInputs(ev, 0)} onTextChange={(ev) => onInputChange(ev, 'firstName')} />
      <InputForm label='Last name' inputRef={(ev) => initialInputs(ev, 1)} onTextChange={(ev) => onInputChange(ev, 'lastName')} />
      <InputForm label='Position' inputRef={(ev) => initialInputs(ev, 2)} onTextChange={(ev) => onInputChange(ev, 'position')} />
      <div>
        <Button variant="contained" onClick={handleButtonClick}>Confirm!</Button>
      </div>
      <div>
        <Link to='/'>Go Home</Link>
      </div>
    </div>
  )
}