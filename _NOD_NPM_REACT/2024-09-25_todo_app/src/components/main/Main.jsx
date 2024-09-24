import { useState } from 'react';
import TodoForm from '../../forms/TodoForm';
import TodoList from '../TodoList';
import './Main.css';

const Main = () => {
    const [todos, setTodos] = useState([]);

    const addTodo = (newTodo) => {
        setTodos([...todos, newTodo]);
    };

    const toggleDone = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <main>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} toggleDone={toggleDone} deleteTodo={deleteTodo} />
        </main>
    );
};

export default Main;



