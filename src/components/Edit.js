import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import useUsersActions from '../hooks/useUsersActions'

const Edit = () => {
  
  const history = useHistory();
  
  const {users, deleteUser, addNewUser} = useUsersActions();

  const userToEditId = window.location.pathname.slice(7); //cut off '/users/' from pathname

  const [user, setUser] = React.useState(users[userToEditId]);

  const onInputChange = (event, fieldName) => {
    setUser((prevUser) => ({
      ...prevUser,
      [fieldName]: event.target.value
    }));
  }

  const handleButtonClick = () => {
    deleteUser(user.id);
    
    addNewUser({
      id: user,
      ...user,
    });

    history.push('/users');
  }
  
  return(
    <div>
      <h3>Edit {user.firstName}'s data</h3>
      <TextField
          id="outlined-helperText-firstName"
          label="First Name"
          defaultValue={user.firstName}
          variant="outlined"
          onChange={(ev) => onInputChange(ev, 'firstName')}
        />
        <TextField
          id="outlined-helperText-lastName"
          label="Larst Name"
          defaultValue={user.lastName}
          variant="outlined"
          onChange={(ev) => onInputChange(ev, 'lastName')}
        />
        <TextField
          id="outlined-helperText-position"
          label="Position"
          defaultValue={user.position}
          variant="outlined"
          onChange={(ev) => onInputChange(ev, 'position')}
        />
        <Button style={{height: '55px'}} variant="contained" onClick={handleButtonClick}>Save</Button>
    </div>
  )
}

export default Edit;