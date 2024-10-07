import React, { useState } from 'react';
import API_ROUTE from '../utils/ApiRoute';

const HomePage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      name,
      email,
      posts: [] // Assuming posts is required and starting empty
    };

    fetch(`${API_ROUTE}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
    .then(response => response.json())
    .then(() => {
      setMessage(`User ${name} was successfully created!`);
      setName('');
      setEmail('');
    })
    .catch(() => {
      setMessage('Error creating user.');
    });
  };

  return (
    <div>
      <h1>This is the main Home page</h1>
      {message && <h2 style={{ color: 'green' }}>{message}</h2>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default HomePage;
