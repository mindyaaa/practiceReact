import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';



function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <>
      <Header filter={filter} setFilter={setFilter} filters={filters}/> 
      <TodoList filter={filter} />
    </>
  );
}

export default App;