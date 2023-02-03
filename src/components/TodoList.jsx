import React, { useState } from 'react';
// import { useImmer } from 'use-immer';
import styles from './TodoList.module.css';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id:123, text: '요리하기', status: 'active'},
        {id:124, text: '밥먹기', status: 'active'},
        {id:125, text: '설거지하기', status: 'active'},
        {id:126, text: '동숲', status: 'active'}
    ]);

    const [added, setAdded] = useState('');
    
    const changeHandler = (e) => {
        const {value} = e.target;
        setAdded(() => setAdded(value));
    }

    const randomId = Math.random();

    const clickHandler = () => {
        console.log(added);
        setTodos((prev) => (
            [...prev, {id : randomId, text : `${added}`, status : 'active'}]
        ))
    };

    return (
        <div className={styles.todoContainer}>
            <ul>TO-DO LIST
            {todos.map((todo) => <li key={todo.id}>{todo.text}</li>)}
            </ul>

            <form 
            onSubmit={(e) => e.preventDefault()}>
                <input
                placeholder='Add To-dos'
                type='text'
                value={added}
                onChange={changeHandler}
                ></input>
                <button
                onClick={clickHandler}
                >ADD</button>
            </form>

        </div>
    );
}

