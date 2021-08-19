import React from 'react';
import { Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ children, ...props }) {
  const loginData = {login: 'abcd', pass: '1234'};
  const isLoggedIn = () => {
    if(loginData.login === 'abcd' && loginData.pass === '1234')
      return true;
      else
      return false;
  }

  if(!loginData) return <div><h1>There are no login data</h1></div>

  return (
    <Route
      {...props}
      render={( location ) => {
        if(isLoggedIn) {
          return (children);
        }

        <Redirect to='/login' />
      }}
    ></Route>
  )
}

export default PrivateRoute;