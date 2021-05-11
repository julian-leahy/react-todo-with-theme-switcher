import { useState } from 'react';
import './FormInput.css';

function FormInput({ newTask }) {

    const [todoText, setTodoText] = useState('');

    const handleChange = (e) => {
        setTodoText(e.target.value);
    }

    const submitTodo = (e) => {
        e.preventDefault();
        if (todoText.length === 0) return;
        newTask(todoText);
        setTodoText('');
    }

    return (
        <form onSubmit={submitTodo}>
            <input
                type="text"
                aria-label="Create a new todo item"
                className="input__lg item"
                placeholder="Create a new todo..."
                value={todoText}
                onChange={handleChange} />
            <button
                className="btn btn__add"
                aria-label="Add a new todo item"
                type="submit">
                Add
            </button>
        </form>
    )
}

export default FormInput;