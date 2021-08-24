import React, { useMemo, useState } from 'react';
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

  const sortByFirstNameUp = 'sort-by-first-name-up';
  const sortByFirstNameDown = 'sort-by-first-name-down';
  const sortByLastNameUp = 'sort-by-last-name-up';
  const sortByLastNameDown = 'sort-by-last-name-down';
  const sortByPositionUp = 'sort-by-position-up';
  const sortByPositionDown = 'sort-by-position-down';

  let sortButtonColor = {
    sortByFirstNameUp: 'primary',
    sortByFirstNameDown: 'default',
    sortByLastNameUp: 'default',
    sortByLastNameDown: 'default',
    sortByPositionUp: 'default',
    sortByPositionDown: 'default'
  }

  const setDefaultColor = (obj) => {
    for(let key in obj)
      if(obj.hasOwnProperty(key))
        obj[key] = 'default';
  }

  const {users, deleteUser} = useUsersActions();

  const [sortingBy, setSortingBy] = useState(sortByFirstNameUp);

  const sortedUsers = useMemo(() => {
    setDefaultColor(sortButtonColor);
    switch(sortingBy) {
      case sortByFirstNameUp : 
        sortButtonColor.sortByFirstNameUp='primary';
        return (
          Object.values(users).sort((a, b) => {
            if(a.firstName > b.firstName) return 1;
            if(a.firstName < b.firstName) return -1;
            return 0;
          })
        );
      case sortByFirstNameDown :
        sortButtonColor.sortByFirstNameDown='primary';
        return (
          Object.values(users).sort((a, b) => {
            if(a.firstName < b.firstName) return 1;
            if(a.firstName > b.firstName) return -1;
            return 0;
          })
        );
      case sortByLastNameUp :
        sortButtonColor.sortByLastNameUp='primary';
        return (
          Object.values(users).sort((a, b) => {
            if(a.lastName > b.lastName) return 1;
            if(a.lastName < b.lastName) return -1;
            return 0;
          })
        );
      case sortByLastNameDown :
        sortButtonColor.sortByLastNameDown='primary';
        return (
          Object.values(users).sort((a, b) => {
            if(a.lastName < b.lastName) return 1;
            if(a.lastName > b.lastName) return -1;
            return 0;
          })
        );
        case sortByPositionUp :
          sortButtonColor.sortByPositionUp='primary';
          return (
            Object.values(users).sort((a, b) => {
              if(a.position > b.position) return 1;
              if(a.position < b.position) return -1;
              return 0;
            })
          );
      case sortByPositionDown :
        sortButtonColor.sortByPositionDown='primary';
        return (
          Object.values(users).sort((a, b) => {
            if(a.position < b.position) return 1;
            if(a.position > b.position) return -1;
            return 0;
          })
        );
        default : return Object.values(users);
    }
  }, [sortingBy, users]);

  const handleDeleteButtonClick = (event) => {
    console.log('Deleted ID:' + event.currentTarget.value);
    deleteUser(event.currentTarget.value);
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
                value={sortByFirstNameUp} 
                className={classes.margin} 
                size="small"
                color={sortButtonColor.sortByFirstNameUp}
                onClick={() => setSortingBy(sortByFirstNameUp)}
              >
                <ArrowUpwardIcon fontSize="inherit" />
              </IconButton>
              <IconButton 
                aria-label="sort" 
                value={sortByFirstNameDown} 
                className={classes.margin} 
                size="small"
                color={sortButtonColor.sortByFirstNameDown}
                onClick={() => setSortingBy(sortByFirstNameDown)}
              >
                <ArrowDownwardIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <span>Last Name</span>
              <IconButton 
                aria-label="sort" 
                value={sortByLastNameUp}
                className={classes.margin} 
                size="small"
                color={sortButtonColor.sortByLastNameUp}
                onClick={() => setSortingBy(sortByLastNameUp)}
              >
                <ArrowUpwardIcon fontSize="inherit" />
              </IconButton>
              <IconButton 
                aria-label="sort" 
                value={sortByLastNameDown} 
                className={classes.margin} 
                size="small"
                color={sortButtonColor.sortByLastNameDown}
                onClick={() => setSortingBy(sortByLastNameDown)}
              >
                <ArrowDownwardIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
            <TableCell align="center">
              <span>Position</span>
              <IconButton 
                aria-label="sort" 
                value={sortByPositionUp}
                className={classes.margin} 
                size="small"
                color={sortButtonColor.sortByPositionUp}
                onClick={() => setSortingBy(sortByPositionUp)}
              >
                <ArrowUpwardIcon fontSize="inherit" />
              </IconButton>
              <IconButton 
                aria-label="sort" 
                value={sortByPositionDown} 
                className={classes.margin} 
                size="small"
                color={sortButtonColor.sortByPositionDown}
                onClick={() => setSortingBy(sortByPositionDown)}
              >
                <ArrowDownwardIcon fontSize="inherit" />
              </IconButton>
            </TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell align="center">{user.firstName}</TableCell>
              <TableCell align="center">{user.lastName}</TableCell>
              <TableCell align="center">{user.position}</TableCell>
              <TableCell align="right">
                <IconButton aria-label="edit" value={user.id}>
                  <Link to={`/users/${user.id}`}>
                    <EditIcon />
                  </Link>
                </IconButton>
                <IconButton aria-label="delete" value={user.id} onClick={handleDeleteButtonClick}>
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