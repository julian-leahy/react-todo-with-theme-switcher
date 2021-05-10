import './TodoItem.css';

function TodoItem({ id }) {
    return (
        <li className="todo-item">
            <div className="custom-cb">
                <input type="checkbox" id={`todo-${id}`} />
                <label htmlFor={`todo-${id}`}>
                    One
                </label>
            </div>
            <button className="btn btn__delete"></button>
        </li>
    )
}

export default TodoItem;