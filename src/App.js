import './App.css';
import FilterBtn from './components/filter-btn/FilterBtn';
import FormInput from './components/form-input/FormInput';
import Header from './components/header/Header';
import ListFooter from './components/list-footer/ListFooter';
import TodoItem from './components/todo-item/TodoItem';

function App() {
  return (
    <div className="App">
      <div className="hero"></div>
      <div className="container">
        <Header />
        <div className="todo">
          <FormInput />
        </div>
        <ul className="todo-list">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
        <ListFooter />
        <div className="filter-controls">
          <FilterBtn />
          <FilterBtn />
          <FilterBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
