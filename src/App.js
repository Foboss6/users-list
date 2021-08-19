import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Users from './components/Users.js';
import Create from './components/Create.js';
import Edit from './components/Edit.js';
import Login from './components/Login'
import { UsersProvider } from './context/UsersContext';
import PrivateRoute from './hocs/PrivateRoute'

function App() {
  return (
    <UsersProvider>
      <Switch>
          <PrivateRoute exact path='/'>
            <Home />
          </PrivateRoute>
          <PrivateRoute exact path='/users'>
            <Users />
          </PrivateRoute>
          <PrivateRoute exact path='/users/:id'>
            <Edit />
          </PrivateRoute>
          <PrivateRoute exact path='/users/create'>
            <Create />
          </PrivateRoute>
          <Route path='/login' component={Login} />
        </Switch>
    </UsersProvider>
  );
}

export default App;
