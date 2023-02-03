import React,{useEffect, useState} from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {
    const [checked, setChecked] = useState(false);
    const [isLoading, error, products] = useProducts({salesOnly : checked});
    
    const handleChange = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>
        <input type='checkbox' value={checked} onChange={handleChange}></input>
        <label htmlFor="checkbox">show Only Sale🔥</label>
            <ul>
                {isLoading? '...Loading' : products.map((item) => (
                    <li key={item.id}>
                        <article>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </article>
                    </li>
                )) }
                {error && <p>에러가 발생했음</p>}
            </ul>

        </>
    );
}



