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
          <TodoItem id={0} />
          <TodoItem id={1} />
          <TodoItem id={2} />
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
