import { useState } from 'react';
import './TodoForm.css';

const TodoForm = ({ addTodo }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [daysTillDeadline, setDaysTillDeadline] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim() && daysTillDeadline) {
            // Calculate the deadline by adding the number of days to the current date
            const currentDate = new Date();
            const deadlineDate = new Date(currentDate);
            deadlineDate.setDate(currentDate.getDate() + parseInt(daysTillDeadline));

            const newTodo = {
                id: Date.now(), // Unique ID (timestamp)
                title,
                description,
                deadline: deadlineDate.toISOString(), // Calculated deadline date
                createdAt: currentDate.toISOString(), // Auto creation date
                done: false, // Auto done status
            };
            addTodo(newTodo);
            setTitle('');
            setDescription('');
            setDaysTillDeadline('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Task Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Task Description"
                required
            ></textarea>
            <input
                type="number"
                value={daysTillDeadline}
                onChange={(e) => setDaysTillDeadline(e.target.value)}
                placeholder="Days until deadline"
                required
            />
            <button type="submit">Add Task</button>
        </form>
    );
};

export default TodoForm;

