import React, { useEffect } from 'react';
import useAdminsActions from '../hooks/useAdminsActions';

const CheckContext = () => {

  const { admins } = useAdminsActions();

  useEffect(()=>{
    console.log(admins);
  }, [admins]);

  return (
    <div>
      <h1>Ceck context</h1>
    </div>
  );
}

export default CheckContext;