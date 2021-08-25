import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useAdminsActions from '../hooks/useAdminsActions';
import { useHistory, useLocation } from 'react-router';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = () => {

  const classes = useStyles();

  const history = useHistory();
  const location = useLocation();

  const { admins } = useAdminsActions();

  // NEEDs to remake for taking data from Context
  const [login, setLogin] = useState((localStorage.getItem('isLoggedIn') === 'true') ? 'logout' : 'login');

  const [pathname, setPathname] = useState();

  const handleButtonClick = () => {
    if(login === 'logout') {
      history.push('/login');
    }
  }

  useEffect(() => {
    setLogin(() => (admins.CurrentAdmin ? 'logout' : 'login'));
  }, [admins]);

  useEffect(() => {
    let localPath;
    if(location.pathname.search('/users/') !== -1 && location.pathname !== '/users/create') localPath='Editing User data';
    else {
      switch (location.pathname) {
        case ('/'): localPath = 'Home Page'; break;
        case ('/login'): localPath = 'LogIn'; break;
        case ('/register'): localPath = 'Register'; break;
        case ('/users'): localPath = 'Users List'; break;
        case ('/users/create'): localPath = 'Add New User'; break;
        default : localPath = location.pathname;
      };
    }
    
    setPathname(() => (localPath));
  }, [location]);

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {`Users List App: ${pathname}`}
          </Typography>
          <Button color="inherit" onClick={handleButtonClick}>{login}</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;