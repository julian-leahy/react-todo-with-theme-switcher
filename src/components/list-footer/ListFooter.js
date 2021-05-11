import './ListFooter.css';

function ListFooter({ numbTasks, clearCompleted }) {

    const remainingItems = numbTasks === 1 ? `${numbTasks} item left` : `${numbTasks} items left`;

    return (
        <div className="todo-list-footer item" data-testid="list-footer">
            <div className="remaining">
                {remainingItems}
            </div>
            <button
                className="clear"
                onClick={clearCompleted}>
                Clear Completed
            </button>
        </div>
    )
}

export default ListFooter;