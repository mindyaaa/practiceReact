import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './AddTodo.module.css';

export default function AddTodo({onAdd}) {

    const [added, setAdded] = useState('');
    // const randomId = Math.random();

    const changeHandler = (e) => {
        const {value} = e.target;
        setAdded(value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if (added.trim().length === 0) {
            alert('내용을 입력해주세요');
            return setAdded('');
        }
        onAdd({id : uuidv4(), text : `${added}`, status : 'active'});
        setAdded('');
        }


    return (
        <form 
        className={styles.form}
        onSubmit={submitHandler}>
            <input
            className={styles.input}
            placeholder='Add To-dos'
            type='text'
            value={added}
            onChange={changeHandler}
            ></input>
            
            <button
            className={styles.button}
            >ADD</button>
        </form>
    );
}

