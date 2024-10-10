import { NavLink } from 'react-router-dom';
import API_ROUTE from '../utils/ApiRoute';
import { useState, useEffect } from 'react';

const TodosPage = () => {
    const [todos, setTodos] = useState([]);
    const [todoInput, setTodoInput] = useState("");

    // Fetch todos when the component mounts
    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(`${API_ROUTE}/todos`);
                const data = await response.json();
                setTodos(data);
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        };
        fetchTodos();
    }, []);

    // Function to handle adding a new todo
    const handleAddTodo = async () => {
        if (todoInput.trim() !== "") {
            const newTodo = { title: todoInput, done: false };

            try {
                const response = await fetch(`${API_ROUTE}/todos`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newTodo),
                });

                if (response.ok) {
                    const addedTodo = await response.json();
                    setTodos([...todos, addedTodo]);
                    setTodoInput(""); // Clear input after adding
                } else {
                    console.error("Error adding todo:", response.statusText);
                }
            } catch (error) {
                console.error("Error adding todo:", error);
            }
        }
    };

    // Function to toggle the done status of a todo
    const toggleTodoDone = async (id) => {
        const todoToUpdate = todos.find(todo => todo.id === id);
        const updatedTodo = { ...todoToUpdate, done: !todoToUpdate.done };

        try {
            const response = await fetch(`${API_ROUTE}/todos/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedTodo),
            });

            if (response.ok) {
                setTodos(todos.map(todo => todo.id === id ? updatedTodo : todo));
            } else {
                console.error("Error updating todo:", response.statusText);
            }
        } catch (error) {
            console.error("Error updating todo:", error);
        }
    };

    // Function to delete a todo
    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`${API_ROUTE}/todos/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTodos(todos.filter(todo => todo.id !== id));
            } else {
                console.error("Error deleting todo:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting todo:", error);
        }
    };

    // Function to edit a todo (for simplicity, using the same input box)
    const handleEditTodo = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setTodoInput(todoToEdit.title);
        deleteTodo(id);
    };

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input
                    type="text"
                    value={todoInput}
                    onChange={(e) => setTodoInput(e.target.value)}
                    placeholder="Add a new todo"
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            style={{ textDecoration: todo.done ? "line-through" : "none", cursor: "pointer" }}
                            onClick={() => toggleTodoDone(todo.id)}
                        >
                            {todo.title}
                        </span>
                        <button onClick={() => handleEditTodo(todo.id)}>Edit</button>
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <NavLink to="/">Go to Home Page</NavLink> 
        </div>
    );
}

export default TodosPage;

