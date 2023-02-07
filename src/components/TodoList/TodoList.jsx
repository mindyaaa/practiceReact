import React, { useState, useEffect } from 'react';
// import { useImmer } from 'use-immer';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

export default function TodoList({filter}) {
    const [todos, setTodos] = useState(readTodos);

    const onAdd = (newTodo) => {
        setTodos((prev) => ([...prev, newTodo]));
    }

    const updateHandler = (updated) => {
        setTodos((prev) => prev.map((todo) => todo.id === updated.id ? updated : todo));
    }

    const deleteHandler = (deleted) => {
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
    }

    const filtered = getFilterTodos(todos, filter);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    },[todos]);

    return (
        <section className={styles.container}>

            <ul className={styles.list}>   
            {filtered.map((todo) => 
                <Todo 
                key={todo.id}
                todo={todo}
                onDelete={deleteHandler}
                onUpdate={updateHandler}
                 />
            )}
            </ul>

            <AddTodo onAdd={onAdd} />

        </section>
    );
}

function readTodos() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilterTodos(todos, filter) {
    if (filter === 'all') {
        return todos;
    }

    else {
        return todos.filter((todo) => todo.status === filter);
    }
}




