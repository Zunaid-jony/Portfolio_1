import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {
    
        const [products , setProducts] = useState([]);
      useEffect( () =>{
          fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
          .then(response => response.json())
          .then(data => setProducts(data));
      },[])
    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h3>Product:{products.length}
                 {products.img}
                </h3>
                {
                    products.map(product => console.log(product))
                }
            </div>
            <div className='cart-container'>
                <h2> order summary</h2>
                <h4> order sammary</h4>
            </div>
            
        </div>
    );
};

export default Shop;