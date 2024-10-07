import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import API_ROUTE from '../utils/ApiRoute';

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [deleteMessage, setDeleteMessage] = useState('');

  useEffect(() => {
    fetch(`${API_ROUTE}/users?_embed=posts`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleDelete = (id, username) => {
    const updatedUsers = users.filter(user => user.id !== id);
    setUsers(updatedUsers);

    fetch(`${API_ROUTE}/users/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      setDeleteMessage(`User ${username} was successfully deleted.`);
    })
    .catch(() => {
      setDeleteMessage('Error deleting user.');
    });
  };

  return (
    <div>
      <h1>Users Page</h1>
      {deleteMessage && <h2 style={{ color: 'red' }}>{deleteMessage}</h2>}
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              <h2>
                {user.name} ({user.posts.length})
              </h2>
            </Link>
            <p>{user.email}</p>
            <button onClick={() => handleDelete(user.id, user.name)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UsersPage;
