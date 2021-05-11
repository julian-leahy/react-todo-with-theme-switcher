import './TodoItem.css';

function TodoItem({ id, name, completed, deleteItem, toggleCompleted }) {
    return (
        <li className="todo-item item" data-testid="todo">
            <div className="custom-cb">
                <input
                    data-testid="cbox"
                    type="checkbox"
                    id={`todo-${id}`}
                    onChange={() => toggleCompleted(id)}
                    checked={completed} />
                <label htmlFor={`todo-${id}`}>
                    {name}
                </label>
            </div>
            <button
                data-testid="delete"
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