// Import necessary modules and components
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../Users/Users.css'

const Users = () => {
  // Declare state variables
  const [users, setUsers] = useState([]);

  // Define effect to fetch data from API on component mount
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='Users'>
      <h1>Users Page</h1>
      {/* Iterate over users and display their names */}
      {users.map(user => (
        <div key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Users;