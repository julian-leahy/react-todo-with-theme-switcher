import './TodoItem.css';

function TodoItem() {
    return (
        <li className="todo-item">
            <div className="custom-cb">
                <input type="checkbox" id="todo-0" />
                <label htmlFor="todo-0">
                    One
                </label>
            </div>
            <div className="btn-group">
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>
            </div>
        </li>
    )
}

export default TodoItem;