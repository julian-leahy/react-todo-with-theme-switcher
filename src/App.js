import './App.css';

function App() {
  return (
    <div className="App">
      <div className="hero"></div>
      <div className="container">
        <div className="header">
          <h1 className="title">TODO</h1>
          <div className="theme-switcher">
            <button>ST</button>
          </div>
        </div>
        <div className="todo">
          <form>
            <input type="text" />
            <button type="submit">Add</button>
          </form>
        </div>
        <ul className="todo-list">
          <li className="todo-item">
            <div className="custom-cb">
              <input type="checkbox" id="todo-0" />
              <label htmlFor="todo-0">
                One
                </label>
            </div>
            <div className="btn-group">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </li>
          <li className="todo-item">
            <div className="custom-cb">
              <input type="checkbox" id="todo-1" />
              <label htmlFor="todo-1">
                Two
                </label>
            </div>
            <div className="btn-group">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </li>
          <li className="todo-item">
            <div className="custom-cb">
              <input type="checkbox" id="todo-3" />
              <label htmlFor="todo-3">
                Three
                </label>
            </div>
            <div className="btn-group">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </div>
          </li>
        </ul>
        <div className="todo-list-footer">
          <div className="remaining">
            3 items left
            </div>
          <button className="clear">Clear Completes</button>
        </div>
        <div className="filter-controls">
          <button className="all">All</button>
          <button className="active">Active</button>
          <button className="completed">Completed</button>
        </div>
      </div>
    </div>
  );
}

export default App;
