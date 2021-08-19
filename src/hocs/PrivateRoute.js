import React from 'react';
import { Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ children, ...props }) => {
  const loginData = {login: 'abcd1', pass: '1234'};

  const isLoggedIn = ((loginData.login === 'abcd') && (loginData.pass === '1234')) ? true : false;

  console.log('isLoggedIn = '+isLoggedIn);

  if(!loginData) return <div><h1>There are no login data</h1></div>

  return (
    <Route
      {...props}
      render={( location ) => {
        if(isLoggedIn) {
          return (children);
        }
        
        return (
          <Redirect to='/login' />
        )
      }}
    />
  )
}

export default PrivateRoute;