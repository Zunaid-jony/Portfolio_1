import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cart2 from '../TotalCart/Cart2';
import './Product.css'

const Product = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    
    useEffect( ()=>{
        fetch('./tools.JSON')
        .then(response => response.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart =(product)=>{
        const newCart = [...cart,product]
        setCart(newCart);
        

        console.log(product);
    }
   
    return (
        <div className='product-area body'>
            <div className='product'> 
           
                {
                    products.map(product => <Cart  
                        product ={product}
                        key={product.key}
                        handleAddToCart={handleAddToCart}
                    
                    
                    ></Cart>)
                }
          
            </div>
            

             <div className='cart'> 
              <Cart2 cart={cart}
            
              
              ></Cart2>
             
               
              
             
              </div>
        </div>
    );
};

export default Product;