import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users?_embed=posts')
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>Users Page</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              <h2>
                {user.name} ({user.posts.length})
              </h2>
            </Link>
            <p>{user.email}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UsersPage;
