import React, { useEffect, useState } from 'react';

import useUsersActions from '../hooks/useUsersActions'
import useAdminsActions from '../hooks/useAdminsActions'

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router';

const Register = () => {
  const history = useHistory();

  const { addNewUser, users } = useUsersActions();
  const { addNewAdmin, admins } = useAdminsActions();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    position: ''
  });

  const [admin, setAdmin] = useState({
    email: '',
    pass: ''
  });

  const [helperText, setHelperText] = useState({
    helperTextEmail: '',
    helperTextPass: '',
    helperTextPassConfirm: '',
  });

  const onUserInputChange = (event, fieldName) => {
    setUser((prevState) => ({
      ...prevState,
      [fieldName]: event.target.value,
    }));
  }

  const onAdminInputChange = (event, fieldName) => {
    setAdmin((prevState) => ({
      ...prevState,
      [fieldName]: event.target.value,
    }));
    
    if(fieldName === 'pass') {
      setHelperText((prevState) => ({
        ...prevState,
        helperTextPass: '',
      }));
    }
  }

  const handleButtonClick = () => {
    // if((admin.email !== '') && (admin.pass !== '')) {
    //   addNewAdmin({
    //     id: Date.now(),
    //     ...admin,
    //   });
    //   console.log('Admin added to Context');
    // }
    // else console.log('Enter email and password');

    // if((user.firstName !== '') && (user.lastName !== '') && (user.position !== '')) {
    //   addNewUser({
    //     id: Date.now(),
    //     ...user,
    //   });
    //   console.log('User added to Context');
    // }
    // else console.log('Enter user data');

    // localStorage.setItem('isLoggedIn', 'true');

    // history.push('/');

    if( !admin.email ) {
      setHelperText((prevState) => ({
        ...prevState,
        helperTextEmail: 'Enter email',
      }));
    } else {
      if( !admin.pass ) {
        setHelperText((prevState) => ({
          ...prevState,
          helperTextPass: 'Enter password',
        }));
      } else {
        
        
        setHelperText((prevState) => ({
          ...prevState,
          helperTextPass: '',
        }));
      }

      setHelperText((prevState) => ({
        ...prevState,
        helperTextEmail: '',
      }));
    }
 
  }

  const checkPasswordConfirm = (event) => {

    if(admin.pass) { // If password field is not empty, go on
      if(event.target.value) { // if confirm pass field is not empty, go on
        // when bouth password are not empty, go on and check are they the same
        if(admin.pass === event.target.value) {
          // if bouth passwords are the same, turn off errors
          setHelperText((prevState) => ({
            ...prevState,
            helperTextPass: '',
            helperTextPassConfirm: '',
          }));
        } else { //if password are not the same, go out with massage
          setHelperText((prevState) => ({
          ...prevState,
          helperTextPassConfirm: 'Passwords are not the same',
        }));
        }
      } else {        // if confirm pass field is empty, go out with message
        setHelperText((prevState) => ({
          ...prevState,
          helperTextPassConfirm: 'Enter confirm password',
        }));
      }
    } else {         // If password field is empty, go out with message
      setHelperText((prevState) => ({
          ...prevState,
          helperTextPass: 'Enter password',
        }));
    }
  }

  useEffect(() => {
    console.log('AdminContext:');
    console.log(admins);
  }, [admins]);

  useEffect(() => {
    console.log('AdminContext:');
    console.log(users);
  }, [users]);

  return (
    <div>
      <h2>Register</h2>
      <p>Please enter your data</p>
      <div>
        <TextField
          required
          error={!!helperText.helperTextEmail}
          helperText={helperText.helperTextEmail}
          id="outlined-required-email"
          label="Email"
          variant="outlined"
          onChange={(ev) => onAdminInputChange(ev, 'email')}
        />
        <TextField
          id="outlined-password-input-pass"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          error={!!helperText.helperTextPass}
          helperText={helperText.helperTextPass}
          onChange={(ev) => onAdminInputChange(ev, 'pass')}
        />
        <TextField
          id="outlined-password-input-pass-confirm"
          label="Confirm password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          error={!!helperText.helperTextPassConfirm}
          helperText={helperText.helperTextPassConfirm}
          onBlur={(ev) => checkPasswordConfirm(ev)}
          // onChange={(ev)=> onInputChange(ev, 'pass')}
        />
      </div>
      <div>
      <TextField
          required
          id="outlined-required-first-name"
          label="First Name"
          variant="outlined"
          onChange={(ev)=> onUserInputChange(ev, 'firstName')}
        />
      <TextField
          required
          id="outlined-required-last-name"
          label="Last Name"
          variant="outlined"
          onChange={(ev)=> onUserInputChange(ev, 'lastName')}
        />
        <TextField
          id="outlined-required-position"
          label="Position"
          variant="outlined"
          onChange={(ev)=> onUserInputChange(ev, 'position')}
        />
      </div>
      <div>
        <Button variant='contained' onClick={handleButtonClick}>Register</Button>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Register;