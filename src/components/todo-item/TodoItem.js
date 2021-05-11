import './TodoItem.css';

function TodoItem({ id, name, completed, deleteItem, toggleCompleted }) {
    return (
        <li className="todo-item item">
            <div className="custom-cb">
                <input
                    type="checkbox"
                    id={`todo-${id}`}
                    onChange={() => toggleCompleted(id)}
                    checked={completed} />
                <label htmlFor={`todo-${id}`}>
                    {name}
                </label>
            </div>
            <button
                className="btn btn__delete"
                aria-label="delete item"
                onClick={() => deleteItem(id)}>
                <span className="visually-hidden">
                    Delete an item
                    </span>
            </button>
        </li>
    )
}

export default TodoItem;