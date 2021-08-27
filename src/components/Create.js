import React, { useState } from 'react';

import Button from '@material-ui/core/Button';

import InputForm from './InputForm.js';
import useUsersActions from '../hooks/useUsersActions'


export default function Create() {
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    position: ''
  });

  let inputs = [1, 2, 3];

  const initialInputs = (input, inputNumb) => {
    inputs[inputNumb] = input;
  }

  const clearInputs = () => {
    inputs.forEach((input) => {input.value = '';})
  }

  const {addNewUser} = useUsersActions();

  const [isDataValid, setDataValid] = useState(true);
  
  const onInputChange = (event, fieldName) => {
    setUser((prevUser) => ({
      ...prevUser,
      [fieldName]: event.target.value
    }));
  }

  const handleButtonClick = () => {
    if(user && user.firstName && user.lastName && user.position) {
      addNewUser({
        id: Date.now(),
        ...user,
      });
  
      clearInputs('');

      setDataValid(true);
    } else setDataValid(false);
  }

  return(
    <div>
      <h3>Add new user</h3>
      <div>
        <InputForm label='First name' inputRef={(ev) => initialInputs(ev, 0)} onTextChange={(ev) => onInputChange(ev, 'firstName')} />
        <InputForm label='Last name' inputRef={(ev) => initialInputs(ev, 1)} onTextChange={(ev) => onInputChange(ev, 'lastName')} />
        <InputForm label='Position' inputRef={(ev) => initialInputs(ev, 2)} onTextChange={(ev) => onInputChange(ev, 'position')} />
      </div>
        {!isDataValid ? <p>Enter valid User's Data</p> : <></>}
      <div>
        <Button variant="contained" onClick={handleButtonClick}>Confirm!</Button>
      </div>
    </div>
  )
}