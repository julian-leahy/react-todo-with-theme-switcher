import './FilterBtn.css';

function FilterBtn({ name, filterItems, filterBy }) {
    const active = name === filterBy;
    return (
        <button
            className={`${active ? 'btn__filter-active' : ''} btn btn__filter`}
            aria-pressed={active}
            onClick={() => filterItems(name)}>{name}</button>
    )
}

export default FilterBtn;