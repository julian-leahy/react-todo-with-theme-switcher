import { useState } from 'react';
import './App.css';
import FilterBtn from './components/filter-btn/FilterBtn';
import FormInput from './components/form-input/FormInput';
import Header from './components/header/Header';
import ListFooter from './components/list-footer/ListFooter';
import TodoItem from './components/todo-item/TodoItem';
import { nanoid } from 'nanoid';

const FILTER = {
  all: () => true,
  active: task => task.completed === false,
  completed: task => task.completed === true
}

const FILTER_BTNS = Object.keys(FILTER)

function App({ data }) {

  const [taskList, setTaskList] = useState(data || []);
  const [filterBy, setFilterBy] = useState('all');

  const numbTasks = taskList.length;

  /**
   * add a new todo item
   * @param {string} name 
   */
  const newTask = (name) => {
    const task = {
      id: nanoid(),
      name,
      completed: false
    }
    setTaskList([...taskList, task])
  };

  /**
   * delete a todo item by unique id
   * @param {string} id 
   */
  const deleteItem = (id) => {
    const remaining = taskList.filter(task => task.id !== id);
    setTaskList(remaining);
  }

  /**
   * toggle completed boolean
   * @param {string} id 
   */
  const toggleCompleted = (id) => {
    const updatedList = taskList.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTaskList(updatedList);
  }

  /**
   * clear all completed items
   */
  const clearCompleted = () => {
    const clearAll = taskList.map(task => {
      if (task.completed) {
        return { ...task, completed: false }
      }
      return task;
    })
    setTaskList(clearAll);
  }

  /**
   * filter items by all, active or completed
   * @param {string} filter 
   */
  const filterItems = (filter) => {
    setFilterBy(filter);
  }

  const tasks = taskList.filter(FILTER[filterBy]).map(({ id, name, completed }) => (
    <TodoItem
      key={id}
      id={id}
      name={name}
      completed={completed}
      deleteItem={deleteItem}
      toggleCompleted={toggleCompleted} />));

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
        <ListFooter numbTasks={numbTasks} clearCompleted={clearCompleted} />
        <div className="filter-controls item">
          {
            FILTER_BTNS.map((name, idx) => (
              <FilterBtn key={idx} name={name} filterItems={filterItems} filterBy={filterBy} />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
