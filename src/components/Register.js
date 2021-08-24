import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    pass: '',
    passConfirmed: false,
  });

  const [helperText, setHelperText] = useState({
    helperTextEmail: '',
    helperTextPass: '',
    helperTextPassConfirm: '',
  });

  const registerId = Date.now();

  const emailValidation = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    } else {
      return false;
    }
  }

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

    // save admin's data to context
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

        if(!admin.passConfirmed) {
          setHelperText((prevState) => ({
            ...prevState,
            helperTextPassConfirm: 'Enter confirm password',
          }));
        } else {
          addNewAdmin({
            id: registerId,
            email: admin.email,
            pass: admin.pass,
          });
        }
      }
    }

    // save user's data to it's oun context to display it in the users list
    if(user.firstName) {
      if(user.lastName) {
        if(user.position) {
          setHelperText((prevState) => ({
            ...prevState,
            helperTextLastName: '',
            helperTextPosition: '',
          }));

          addNewUser({
            id: registerId,
            ...user,
          });
        } else {
          setHelperText((prevState) => ({
            ...prevState,
            helperTextPosition: 'Enter your Position',
          }));
        }
      } else {
        setHelperText((prevState) => ({
          ...prevState,
          helperTextLastName: 'Enter your Last Name',
        }));
      }
    }

    localStorage.setItem('isLoggedIn', 'true');

    history.push('/');
  }

  const handleEmailBlur = (event) => {
    if(event.target.value) {
      // if email was entered go to its validation
      if (emailValidation(event.target.value)) {
        //If email is valid, write it to local context and clear an error
        setAdmin((prevState) => ({
          ...prevState,
          email: event.target.value,
        }));
        
        setHelperText((prevState) => ({
          ...prevState,
          helperTextEmail: '',
        }));
      } else {
        // If email is not valid go out with error
        setHelperText((prevState) => ({
          ...prevState,
          helperTextEmail: 'Enter a valid email',
        }));
      }
    } else {
      // if email wasn't entered go out with error
      setHelperText((prevState) => ({
        ...prevState,
        helperTextEmail: 'Enter an email',
      }));
    }
  }

  const checkPasswordConfirm = (event) => {

    if(admin.pass) { // If password field is not empty, go on
      if(event.target.value) { // if confirm pass field is not empty, go on
        // when bouth password are not empty, go on and check are they the same
        if(admin.pass === event.target.value) {
          // if bouth passwords are the same, turn off errors, toggle flag about confirm pass
          setHelperText((prevState) => ({
            ...prevState,
            helperTextPass: '',
            helperTextPassConfirm: '',
          }));

          setAdmin((prevState) => ({
            ...prevState,
            passConfirmed: true,
          }));
        } else { //if password are not the same, go out with massage
          setHelperText((prevState) => ({
          ...prevState,
          helperTextPassConfirm: 'Passwords are not the same',
        }));

        setAdmin((prevState) => ({
          ...prevState,
          passConfirmed: false,
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
    console.log('UsersContext:');
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
          // onChange={(ev) => onAdminInputChange(ev, 'email')}
          onBlur={(ev) => handleEmailBlur(ev)}
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
        <p>If you want, you can add yourself to the users list</p>
      </div>
      <div>
      <TextField
          id="outlined-required-first-name"
          label="First Name"
          variant="outlined"
          onChange={(ev)=> onUserInputChange(ev, 'firstName')}
        />
      <TextField
          id="outlined-required-last-name"
          label="Last Name"
          variant="outlined"
          error={!!helperText.helperTextLastName}
          helperText={helperText.helperTextLastName}
          onChange={(ev)=> onUserInputChange(ev, 'lastName')}
        />
        <TextField
          id="outlined-required-position"
          label="Position"
          variant="outlined"
          error={!!helperText.helperTextPosition}
          helperText={helperText.helperTextPosition}
          onChange={(ev)=> onUserInputChange(ev, 'position')}
        />
      </div>
      <div>
        <Button variant='contained' onClick={handleButtonClick}>Register</Button>
      </div>
      <div>
        <Link to='/login'>Back to LogIn</Link>
      </div>
    </div>
  )
}

export default Register;