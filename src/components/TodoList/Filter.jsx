import React from 'react';

export default function Filter({onFilter}) {
    const clickHandler = (e) => {
        const { innerText } = e.target;

        if (innerText === 'Active') {
            onFilter('active')
        } else if (innerText === 'Completed') {
            onFilter('completed')
        } else onFilter('all')
    };

    return (
        <>
            <button onClick={clickHandler}></button>
            <button onClick={clickHandler}></button>
            <button onClick={clickHandler}></button>
        </>
    );
}

