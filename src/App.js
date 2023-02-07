import './App.css';
import React, {useState} from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import { DarkModeProvider } from './context/DarkModeContext';



function App() {
  const filters = ['all', 'active', 'completed'];
  const [filter, setFilter] = useState(filters[0]);

  return (
    <DarkModeProvider>
      <Header filter={filter} setFilter={setFilter} filters={filters}/> 
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;