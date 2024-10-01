import React, { useEffect, useState } from 'react';

const TodoPage = () => {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((data) => setTodos(data));
    }, []);
    
    return (
        <div>
        <h1>Todo Page</h1>
        <ol>
            {todos.map((todo) => (
            <li key={todo.id}>
                <h2>{todo.title}</h2>
                <p>{todo.completed}</p>
            </li>
            ))}
        </ol>
        </div>
    );
  
}

export default TodoPage;

// Json placeholder
