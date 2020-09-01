import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
  const cake = <li>Eat pancake</li>;
  return (
    <ul>
      <li>{ (new Date()).toString() }</li>
      { cake }
      <li>Drink coffee</li>
      <li>Learn React</li>
      <li>Create React App</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My Todo List</h1>;
};

const SearchPanel = () => {
  return <input type='text' placeholder='search'></input>;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};
ReactDOM.render(<App />, document.querySelector('#root'));
