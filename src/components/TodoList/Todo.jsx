import React from 'react';
import styles from './Todo.module.css';

export default function Todo({todo, onDelete, onUpdate}) {
    const changeHandler = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }
    const clickHandler = () => onDelete(todo);
    return (
            <li key={todo.id}
            className={styles.todo}
            >
                <input
                className={styles.checkbox}
                onChange={changeHandler} 
                checked={todo.status === 'completed'} 
                type='checkbox' 
                id='todoCheckBox'/>
                <label htmlFor='todoCheckBox'>{todo.text}</label>
                <span className={styles.icon}>
                <button 
                className={styles.button}
                onClick={clickHandler}>❌</button>
                </span>
            </li>   
    );
}

