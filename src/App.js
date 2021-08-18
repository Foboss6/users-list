import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.js'
import Users from './components/Users.js';
import Create from './components/Create.js';
import Edit from './components/Edit.js';
import { UsersProvider } from './context/UsersContext';

function App() {
  return (
    <UsersProvider>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Users} />
        <Route path='/users/create' component={Create} />
        <Route path='/users/:id' component={Edit} />
      </Switch>
    </UsersProvider>
  );
}

export default App;
