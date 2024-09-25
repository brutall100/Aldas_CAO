import Button from './x_button/Button'; // Import the updated Button component

const TodoListItem = ({ todo, toggleDone, deleteTodo }) => {
  const { title, description, deadline, createdAt, done } = todo;

  const deadlineDate = new Date(deadline);
  const now = new Date();
  const timeLeft = Math.floor((deadlineDate - now) / (1000 * 60 * 60 * 24)); // Days left

  return (
    <li style={{ textDecoration: done ? 'line-through' : 'none' }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Created at: {new Date(createdAt).toLocaleDateString()}</p>
      <p>Deadline: {new Date(deadline).toLocaleDateString()}</p>
      <p>Time Left: {timeLeft >= 0 ? `${timeLeft} days left` : 'Deadline passed!'}</p>

      <input type="checkbox" checked={done} onChange={toggleDone} /> Mark as done

      {/* Use different colors for different buttons */}
      <Button handleClick={toggleDone} color="secondary">Toggle Done</Button>
      <Button handleClick={deleteTodo} color="danger">Delete</Button>
    </li>
  );
};

export default TodoListItem;



