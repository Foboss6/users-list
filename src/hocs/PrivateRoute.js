import React from 'react';
import { Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ children, ...props }) => {
  
  console.log(localStorage.getItem('isLoggedIn'));
  const isLoggedIn = (localStorage.getItem('isLoggedIn') === 'true') ? true : false;
  console.log(isLoggedIn);

  return (
    <Route
      {...props}
      render={() => (
        isLoggedIn 
        ?
          children
        :
          <Redirect to='/login' />
      )}
    />
  )
}

export default PrivateRoute;