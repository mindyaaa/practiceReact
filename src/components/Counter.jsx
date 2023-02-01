import React, { useState } from 'react';

export default function Counter({totalCount, setTotalCount}) {
    const [count, setCount] = useState(0);
    let clickHandler = () => {
        setCount((prev) => prev + 1);
        setTotalCount((prev) => prev + 1);
    }
    return (
        <div className='counterContainer'>
            <h1 className='counterNumber'>{count}</h1>
            <button onClick={clickHandler} className='counterButton'>Add +</button>
        </div>
    );
}

