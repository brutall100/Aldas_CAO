import React, { useEffect, useState } from 'react';

const UsersPage = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => setUsers(data));
    }, []);
    
    return (
        <div>
        <h1>Users Page</h1>
        <ol>
            {users.map((user) => (
            <li key={user.id}>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </li>
            ))}
        </ol>
        </div>
    );

}

export default UsersPage;

// Json placeholder