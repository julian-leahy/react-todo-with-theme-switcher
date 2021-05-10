import './FormInput.css';

function FormInput() {
    return (
        <form>
            <input
                type="text"
                aria-label="Create a new todo item"
                className="input__lg item"
                placeholder="Create a new todo..." />
            <button className="btn btn__add" type="submit">Add</button>
        </form>
    )
}

export default FormInput;