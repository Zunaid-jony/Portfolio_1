import { useState, useEffect } from 'react';
const useProducts = ()=>{

    const [products, setProducts]= useState([]);
    useEffect( ()=>{
        fetch('./products.JSON')
        .then(response => response.json())
        .then(data => setProducts(data));
    },[]);
    return [products ]
}
export default useProducts;