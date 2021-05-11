import './TodoItem.css';

function TodoItem({ id, name, completed, deleteItem }) {
    return (
        <li className="todo-item item">
            <div className="custom-cb">
                <input type="checkbox" id={`todo-${id}`} defaultChecked={completed} />
                <label htmlFor={`todo-${id}`}>
                    {name}
                </label>
            </div>
            <button
                className="btn btn__delete"
                onClick={() => deleteItem(id)}></button>
        </li>
    )
}

export default TodoItem;