import React,{useState} from 'react';
import './AppXY.css';

export default function AppXY() {
    const [position, setPosition] = useState({x:0, y:0});


    return (
        <div 
        className='container' 
        onMouseMove={(e) => {
            setPosition((prev) => ({...prev, x:e.clientX}))
        }}>
            <div style={{transform: `translate(${position.x}px, ${position.y}px)`}} className='pointer'></div>
        </div>
    );
}

