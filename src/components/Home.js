import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home page</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
        <li>
          <Link to='/users/create'>Add new user</Link>
        </li>
        <li>
          <Link to='/login'>Quit</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;