import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Users from './components/Users.js';
import Create from './components/Create.js';
import Edit from './components/Edit.js';
import Login from './components/Login'
import { UsersProvider } from './context/UsersContext';
import PrivateRoute from './hocs/PrivateRoute'
import { AdminsProvider } from './context/AdminsContext';

import CheckContext from './components/CheckContext'

function App() {
  return (
    <AdminsProvider>
      <UsersProvider>
      <Switch>
          <PrivateRoute exact path='/'>
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path='/users'>
            <Users />
          </PrivateRoute>
          <PrivateRoute exact path='/users/create'>
            <Create />
          </PrivateRoute>
          <PrivateRoute exact path='/users/:id'>
            <Edit />
          </PrivateRoute>
          {/* <Route path='/users/:id' component={Edit} /> */}
          <Route path='/login' component={Login} />
          <Route path='/context' component={CheckContext} />
        </Switch>
      </UsersProvider>
    </AdminsProvider>
  );
}

export default App;
