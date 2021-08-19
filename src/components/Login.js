import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <h1>Please login</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
          variant="outlined"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
      </div>
      <div>
        <Button variant="contained">
          <Link style={{textDecoration: 'none', color: 'default'}} to={'/'} >Enter</Link>
        </Button>
      </div>
      <div>
        <h2>or you can <Link to='/register'>Register</Link></h2>
      </div>
    </div>
  );
}

export default Login;