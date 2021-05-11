import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  { id: 0, name: 'First item todo', completed: false },
  { id: 1, name: 'Second item todo', completed: true },
  { id: 2, name: 'Third item todo', completed: false }
]

ReactDOM.render(
  <React.StrictMode>
    <App data={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);


