import './FilterBtn.css';

function FilterBtn({ name, filterItems, filterBy }) {
    const active = name === filterBy;
    return (
        <button
            data-testid={name}
            className={`${active ? 'btn__filter-active' : ''} btn btn__filter`}
            aria-pressed={active}
            aria-label={`filter ${name} items`}
            onClick={() => filterItems(name)}>{name}</button>
    )
}

export default FilterBtn;