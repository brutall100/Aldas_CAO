import React, { useState } from 'react';
import API_ROUTE from '../utils/ApiRoute';

const UserForm = ({ onUserCreated }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            name,
            email,
            posts: [] 
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
            if (onUserCreated) {
                onUserCreated(name);
            }
        })
        .catch(() => {
            setMessage('Error creating user.');
        });
    };

    // Check if form is complete
    const isFormComplete = name.trim() !== '' && email.trim() !== '';

    return (
        <div>
            {message && <h2 style={{ color: message.includes('Error') ? 'red' : 'green' }}>{message}</h2>}
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
                <button type="submit" disabled={!isFormComplete}>Create User</button>
            </form>
        </div>
    );
};

export default UserForm;

