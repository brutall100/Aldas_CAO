import TodoListItem from './TodoListItem';
import './TodoList.css';

const TodoList = ({ todos, toggleDone, deleteTodo }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    toggleDone={() => toggleDone(todo.id)}
                    deleteTodo={() => deleteTodo(todo.id)}
                />
            ))}
        </ul>
    );
};

export default TodoList;

