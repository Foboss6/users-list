import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link, useHistory } from 'react-router-dom';
import useAdminsActions from '../hooks/useAdminsActions';

const Login = () => {

  const { admins } = useAdminsActions();

  const [loginData = {}, setLoginData] = useState();

  const history = useHistory();

  localStorage.setItem('isLoggedIn', 'false');

  const onInputChange = (event, fieldName) => {
    setLoginData((prevState) => ({
      ...prevState,
      [fieldName]: event.target.value
    }));
  }

  const handleButtonClick = () => {
    if(loginData.email && loginData.pass) {
      const adminsList = Object.values(admins);
      if(adminsList.some(admin => (admin.email === loginData.email && admin.pass === loginData.pass))) {
        console.log('you logged in');
        localStorage.setItem('isLoggedIn', 'true');
        history.push('/');
      }
      else {
        console.log('wrong email or password!');
      }
    }
  }

  return (
    <div>
      <h1>Please login</h1>
      <div>
        <TextField
          required
          id="outlined-required-email"
          label="Email"
          type="email"
          variant="outlined"
          onChange={(ev)=> onInputChange(ev, 'email')}
        />
        <TextField
          id="outlined-password-input-pass"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          onChange={(ev)=> onInputChange(ev, 'pass')}
        />
      </div>
      <div>
        <Button variant="contained" onClick={handleButtonClick}>
          Enter
        </Button>
      </div>
      <div>
        <Button variant="contained">
          <Link style={{textDecoration: 'none', color: 'default'}} to='/context'>Check Context</Link>
        </Button>
      </div>
      <div>
        <h2>or you can <Link to='/register'>Register</Link></h2>
      </div>
    </div>
  );
}

export default Login;