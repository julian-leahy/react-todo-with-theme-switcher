import { useState } from 'react';
import './App.css';
import FilterBtn from './components/filter-btn/FilterBtn';
import FormInput from './components/form-input/FormInput';
import Header from './components/header/Header';
import ListFooter from './components/list-footer/ListFooter';
import TodoItem from './components/todo-item/TodoItem';
import { nanoid } from 'nanoid';

function App({ data }) {

  const [taskList, setTaskList] = useState(data || []);

  const newTask = (name) => {
    const task = {
      id: `todo-${nanoid()}`,
      name,
      completed: false
    }
    setTaskList([...taskList, task])
  }

  const tasks = taskList.map(({ id, name, completed }) => (
    <TodoItem
      key={id}
      id={id}
      name={name}
      completed={completed} />));

  return (
    <div className="App">
      <div className="hero"></div>
      <div className="container">
        <Header />
        <div className="todo">
          <FormInput newTask={newTask} />
        </div>
        <ul className="todo-list">
          {tasks}
        </ul>
        <ListFooter />
        <div className="filter-controls item">
          <FilterBtn name={'all'} />
          <FilterBtn name={'active'} />
          <FilterBtn name={'completed'} />
        </div>
      </div>
    </div>
  );
}

export default App;
