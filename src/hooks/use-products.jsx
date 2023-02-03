import React, {useState, useEffect} from 'react';

export default function useProducts({salesOnly}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(undefined);
    const [products, setProducts] = useState([]);

    useEffect(() => 
    {
    setIsLoading(true);
    fetch(`${salesOnly ? 'data/sale_products.json' : 'data/products.json'}`)
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((err) => setError(err))
    .finally(() => setIsLoading(false))
    }
    ,[salesOnly]);

    return [isLoading, error, products];
}