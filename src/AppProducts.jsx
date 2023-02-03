import React, { useState } from 'react';
import Products from './basic/Products';

export default function AppProducts() {
    const [showProducts, setShowProducts] = useState(true);
    const handleClick = () => setShowProducts((show) => !show);
    return (
        <div>
            {showProducts && <Products />}
            <button onClick={handleClick} >Toggle</button>
        </div>
    );
}

