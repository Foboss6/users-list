import React, { useState } from 'react';

const defaultUsersContextState = {
  users: {
    111111: {
      id: 111111,
      firstName: 'Ivan',
      lastName: 'Ivanov',
      position: 'worker',
    },
    222222: {
      id: 222222,
      firstName: 'Petro',
      lastName: 'Petrov',
      position: 'worker on zavod',
    },
    333333: {
      id: 333333,
      firstName: 'Semen',
      lastName: 'Semenov',
      position: 'trainee',
    },
    444444: {
      id: 444444,
      firstName: 'Kiril',
      lastName: 'Kirilov',
      position: 'designer',
    },
   },
};

export const defaultUsersContext = {
  context: defaultUsersContextState,
  setContext: () => {
    throw new Error('Please add the UsersContextxProvider to your page!');
  },
};

export const UsersContext = React.createContext(defaultUsersContext);

export const UsersProvider = ({children}) => {
  const [context, setContext] = useState(defaultUsersContextState);
  return (
    <UsersContext.Provider
      value={{
        context,
        setContext,
      }}
    >
    {children}
    </UsersContext.Provider>
  );
}