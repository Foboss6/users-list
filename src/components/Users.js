import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

import useUsersActions from '../hooks/useUsersActions';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

const Users = (props) => {
  const { classes } = props;

  const {users, deleteUser} = useUsersActions();

  const handleDeleteButtonClick = (event) => {
    console.log('Deleted ID:' + event.currentTarget.value);
    deleteUser(event.currentTarget.value);
  }

  const handleSortButtonClick = (event) => {
    console.log(event.currentTarget.value);
  }

  return (
    <>
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              <span>First Name</span>
              <IconButton 
                aria-label="sort" 
                value="sort-by-first-name-down" 
                className={classes.margin} 
                size="small"
                style={{color: 'blue'}}
                onClick={handleSortButtonClick}
              >
                <ArrowDownwardIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <span>Last Name</span>
              <IconButton 
                aria-label="sort" 
                value="sort-by-first-name-up" 
                className={classes.margin} 
                size="small"
                style={{color: 'grey'}}
                onClick={handleSortButtonClick}
              >
                <ArrowUpwardIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
            <TableCell align="center">Position</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(users).map((key) => (
            <TableRow key={users[key].id}>
              <TableCell align="center">{users[key].firstName}</TableCell>
              <TableCell align="center">{users[key].lastName}</TableCell>
              <TableCell align="center">{users[key].position}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit" value={key}>
                  <Link to={`/users/:${key}`} style={{ textDecoration: 'none'}}>
                    <EditIcon />
                  </Link>
                </IconButton>
                <IconButton aria-label="delete" value={key} onClick={handleDeleteButtonClick}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
    <br/>
    <div>
      <Link to='/users/create'>Add new User</Link>
    </div>
    <div>
      <Link to='/'>Go home</Link>
    </div>
    </>
  );
}

Users.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Users);