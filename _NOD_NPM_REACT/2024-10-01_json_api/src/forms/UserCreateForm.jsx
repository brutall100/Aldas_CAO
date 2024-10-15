import React, { useState } from 'react';
import API_ROUTE from '../utils/ApiRoute';
import styles from './UserForm.module.css';

const UserForm = ({ onUserCreated }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || email.trim() === '') {
            setIsFormValid(false);
            setMessage('Form is invalid');
            return;
        }

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
            setIsFormValid(true); // Reset form validity
            if (onUserCreated) {
                onUserCreated(name);
            }
        })
        .catch(() => {
            setMessage('Error creating user.');
        });
    };

    return (
        <div className={styles.formContainer}>
            {message && <h2>{message}</h2>}
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label
                        htmlFor="name"
                        className={isFormValid ? styles.label : styles.invalidLabel}
                    >
                        Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        className={isFormValid ? styles.input : styles.invalidInput}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className={isFormValid ? styles.label : styles.invalidLabel}
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        className={isFormValid ? styles.input : styles.invalidInput}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={styles.button}>
                    Create User
                </button>
            </form>
        </div>
    );
};

export default UserForm;
