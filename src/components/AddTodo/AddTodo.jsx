import React,{useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

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
        }
        onAdd({id : uuidv4(), text : `${added}`, status : 'active'});
        setAdded('');
        }


    return (
        <form 
        onSubmit={submitHandler}>
            <input
            placeholder='Add To-dos'
            type='text'
            value={added}
            onChange={changeHandler}
            ></input>
            
            <button>ADD</button>
        </form>
    );
}

