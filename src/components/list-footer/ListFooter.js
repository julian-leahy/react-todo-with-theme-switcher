import './ListFooter.css';

function ListFooter({ numbTasks }) {

    const remainingItems = numbTasks === 1 ? `${numbTasks} item left` : `${numbTasks} items left`;

    return (
        <div className="todo-list-footer item">
            <div className="remaining">
                {remainingItems}
            </div>
            <button className="clear">Clear Completed</button>
        </div>
    )
}

export default ListFooter;