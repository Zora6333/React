import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../User/User.css'
function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <div className='Page'> 
      {user ? (
        <>
          <h1>User Details for user ID: {id}</h1>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default User;