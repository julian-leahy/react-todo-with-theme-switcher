import './FilterBtn.css';

function FilterBtn({ name }) {
    return (
        <button className="btn btn__filter">{name}</button>
    )
}

export default FilterBtn;