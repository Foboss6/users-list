import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useUsersActions from '../hooks/useUsersActions'
import { Link } from 'react-router-dom';

const Edit = ( props ) => {
  
  const {users, deleteUser, addNewUser} = useUsersActions();
  // const userToEdit = users[props.match.params.id.slice(1, props.match.params.id.length)];
  const userToEdit = users[222222];

  console.log('Edit');
  try {
    console.log(props.match.params);
  } catch (e) {
    console.log(e);
  }

  const [user, setUser] = React.useState(userToEdit);

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
    console.log(user);
  }

  useEffect(()=>{
    console.log(users);
  }, [users]);
  
  return(
    <div>
      <h3>edit user data</h3>
      {/* <p>ID: {props.match.params.id.slice(1,props.match.params.id.length)}</p> */}
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
      <div>
        <Button variant="contained" onClick={handleButtonClick}>Save</Button>
      </div>
      <div>
        <Link to='/'>Go Home</Link>
      </div>
      <div>
        <Link to='/users'>To Users list</Link>
      </div>
    </div>
  )
}

export default Edit;