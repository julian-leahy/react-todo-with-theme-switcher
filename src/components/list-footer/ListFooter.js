import './ListFooter.css';

function ListFooter() {
    return (
        <div className="todo-list-footer item">
            <div className="remaining">
                3 items left
            </div>
            <button className="clear">Clear Completed</button>
        </div>
    )
}

export default ListFooter;