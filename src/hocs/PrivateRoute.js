import React from 'react';
import { Redirect, Route} from 'react-router-dom';

const PrivateRoute = ({ children, ...props }) => {
  
  const isLoggedIn = (localStorage.getItem('isLoggedIn') === 'true') ? true : false;

  return (
    <Route
      {...props}
      render={() => (
        isLoggedIn 
        ? children
        : <Redirect to='/login' />
      )}
    />
    // <Route
    //   {...props}
    //   render={({location}) => {
    //     console.log('Location:');
    //     console.log(location);

    //     if(isLoggedIn) {
    //       return (
    //         children
    //       );
    //     }

    //     return (
    //       <Redirect to='/login' />
    //     )
    //   }}
    // />
  )
}

export default PrivateRoute;