import React, { useState } from 'react';
// import { useImmer } from 'use-immer';
import styles from './TodoList.module.css';
import AddTodo from '../AddTodo/AddTodo';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:123, text: '요리하기', status: 'active'},
        {id:124, text: '밥먹기', status: 'active'},
        {id:125, text: '설거지하기', status: 'active'},
        {id:126, text: '동숲', status: 'active'}
    ]);

    const onAdd = (newTodo) => {
        setTodos((prev) => ([...prev, newTodo]));
    }

    const updateHandler = (updated) => {
        setTodos((prev) => prev.map((todo) => todo.id === updated.id ? updated : todo));
    }

    const deleteHandler = (deleted) => {
        setTodos(todos.filter((todo) => todo.id !== deleted.id));
    }

    return (
        <section className={styles.todoContainer}>

            <ul>TO-DO LIST
            {todos.map((todo) => 
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




