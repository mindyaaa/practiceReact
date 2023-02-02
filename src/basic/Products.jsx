import React,{useEffect, useState} from 'react';

export default function Products() {
    const [products, setProducts] = useState([]);
    const [checked, setChecked] = useState(false);
    const handleChange = () => setChecked((prev) => !prev);

    useEffect(() => 
    {
    fetch(`${checked ? 'data/sale_products.json' : 'data/products.json'}`)
    .then((res) => res.json())
    .then((data) => setProducts(data));
    }
    ,[checked]);

    return (
        <>
        <input type='checkbox' value={checked} onChange={handleChange}></input>
        <label htmlFor="checkbox">show Only Sale🔥</label>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <article>
                            <h3>{item.name}</h3>
                            <p>{item.price}</p>
                        </article>
                    </li>
                ))}
            </ul>
        </>
    );
}

