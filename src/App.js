import { useState, useEffect } from 'react';
import './App.css';
import FilterBtn from './components/filter-btn/FilterBtn';
import FormInput from './components/form-input/FormInput';
import Header from './components/header/Header';
import ListFooter from './components/list-footer/ListFooter';
import TodoItem from './components/todo-item/TodoItem';
import { nanoid } from 'nanoid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const FILTER = {
  all: () => true,
  active: task => task.completed === false,
  completed: task => task.completed === true
}

const FILTER_BTNS = Object.keys(FILTER);

const INITIALSTATE = JSON.parse(localStorage.getItem('todoList')) || [];

function App() {

  const [taskList, setTaskList] = useState(INITIALSTATE);
  const [filterBy, setFilterBy] = useState('all');
  //const [foo, setFoo] = useState(taskList)

  const numbTasks = taskList.length;

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(taskList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setTaskList(items);
  }

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(taskList));
  }, [taskList])

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

  const tasks = taskList.filter(FILTER[filterBy]).map(({ id, name, completed }, index) =>
  (
    <TodoItem
      key={id}
      index={index}
      id={id}
      name={name}
      completed={completed}
      deleteItem={deleteItem}
      toggleCompleted={toggleCompleted} />
  )
  )

  return (
    <div className="App">
      <div className="hero"></div>
      <div className="container">
        <div className="centered">
          <Header />
          <div className="todo">
            <FormInput newTask={newTask} />
          </div>
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todos">
              {(provided) =>
                <ul className="todo-list" {...provided.droppableProps}
                  ref={provided.innerRef}>
                  {tasks}
                  {provided.placeholder}
                </ul>
              }
            </Droppable>
          </DragDropContext>
          {
            numbTasks > 0 && <ListFooter numbTasks={numbTasks} clearCompleted={clearCompleted} />
          }

          <div data-testid='filters' className={`${numbTasks === 0 ? 'hidden' : 'filter-controls item'}`}>
            {
              FILTER_BTNS.map((name, idx) => (
                <FilterBtn key={idx} name={name} filterItems={filterItems} filterBy={filterBy} />
              ))
            }
          </div>
          {
            numbTasks > 1 && <h2 className="drag-text">Drag items to reorder</h2>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
