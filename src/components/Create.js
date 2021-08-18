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

  const {addNewUser, users} = useUsersActions();
  
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
  }

  useEffect(() => {
    console.log(users);
  }, [users]);


  return(
    <div>
      <h3>Add new user</h3>
      <InputForm label='First name' onTextChange={(ev) => onInputChange(ev, 'firstName')} />
      <InputForm label='Last name' onTextChange={(ev) => onInputChange(ev, 'lastName')} />
      <InputForm label='Position' onTextChange={(ev) => onInputChange(ev, 'position')} />
      <div>
        <Button variant="contained" onClick={handleButtonClick}>Confirm!</Button>
      </div>
      <div>
        <Link to='/'>Go Home</Link>
      </div>
    </div>
  )
}