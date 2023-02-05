import React from 'react';

export default function Todo({todo, onDelete, onUpdate}) {
    const changeHandler = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status});
    }
    const clickHandler = () => onDelete(todo);
    return (
            <li key={todo.id}>
                <input
                onChange={changeHandler} 
                checked={todo.status === 'completed'} 
                type='checkbox' 
                id='todoCheckBox'/>
                <label htmlFor='todoCheckBox'>{todo.text}</label>
                <button onClick={clickHandler}>❌</button>
            </li>   
    );
}

