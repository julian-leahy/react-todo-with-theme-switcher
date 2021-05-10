import './FilterBtn.css';

function FilterBtn({ name }) {
    return (
        <button className="btn btn__filter btn__filter-active">{name}</button>
    )
}

export default FilterBtn;