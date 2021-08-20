import React, { useEffect } from 'react';
import useAdminsActions from '../hooks/useAdminsActions';

const CheckContext = () => {

  const { admins } = useAdminsActions();

  useEffect(()=>{
    console.log(admins);
  }, [admins]);

  // console.log('Admins from localStorage:');
  // console.log(localStorage.getItem('admins'));
  // console.log('Users from localStorage:');
  // console.log(localStorage.getItem('users'));

  return (
    <div>
      <h1>Ceck context</h1>
    </div>
  );
}

export default CheckContext;